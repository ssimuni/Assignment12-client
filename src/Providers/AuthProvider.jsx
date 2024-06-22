import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import useAxiosPublic from "../Hooks/useAxiosPublic"

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const axiosPublic = useAxiosPublic();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, name, photo) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: photo ? photo : null
            });

            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    const updateUserInfo = async (name, photoURL) => {
        try {
            await updateProfile(auth.currentUser, { displayName: name, photoURL });
            setUser({ ...user, displayName: name, photoURL });
        } catch (error) {
            console.error('Error updating user info:', error.message);
            throw error;
        }
    };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        setLoading(true);

        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    const signInWithGithub = async () => {
        setLoading(true);
        try {
            const provider = new GithubAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);

            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setUser(currentUser);
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setUser(null);
                setLoading(false);
            }

        });
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user, loading, createUser, signIn, logOut, signInWithGoogle,
        signInWithGithub, updateUserInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider