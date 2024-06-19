import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddArticles from "../Pages/AddArticles/AddArticles";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register"
import PrivateRoute from "./PrivateRoute";
import AllArticles from "../Pages/AllArticles/AllArticles";
import Details from "../Pages/Details/Details";
import Subscription from "../Pages/Subscription/Subscription";
import MyProfile from "../Pages/MyProfile/MyProfile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import MyArticles from "../Pages/MyArticles/MyArticles";
import UpdateMyArticles from "../Pages/MyArticles/UpdateMyArticles";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AllArticlesAdmin from "../Pages/Dashboard/AllArticlesAdmin";
import AddPublisher from "../Pages/Dashboard/AddPublisher";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/All-Articles')
            },
            {
                path: '/addArticles',
                element: <PrivateRoute><AddArticles></AddArticles></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allArticles',
                element: <AllArticles></AllArticles>,
                loader: () => fetch('http://localhost:5000/All-Articles')
            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/All-Articles')
            },
            {
                path: '/subscription',
                element: <PrivateRoute><Subscription></Subscription></PrivateRoute>
            },
            {
                path: '/myProfile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/update',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/myArticles',
                element: <PrivateRoute><MyArticles></MyArticles></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/All-Articles')
            },
            {
                path: '/updateMyArticles/:id',
                element: <PrivateRoute><UpdateMyArticles></UpdateMyArticles></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/All-Articles/${params.id}`)
            }
        ]
    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'allUser',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'allArticlesAdmin',
                element: <AllArticlesAdmin></AllArticlesAdmin>
            },
            {
                path: 'addPublisher',
                element: <AddPublisher></AddPublisher>
            }

        ]
    }
]);
