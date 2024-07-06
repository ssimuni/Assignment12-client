import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider'
import usePublisher from '../../Hooks/usePublisher';
import SectionTitle from '../../Components/SectionTitle'

const image = import.meta.env.VITE_imgHost;
const imageApi = `https://api.imgbb.com/1/upload?key=${image}`;

const AddPublisher = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [publishers, refetch] = usePublisher();

  const [selectedImage, setSelectedImage] = useState(null);

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await fetch(imageApi, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const result = await response.json();
      return result.data.url; // Return the URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };


  const handleAddPublisher = async (event) => {
    event.preventDefault();
    const form = event.target;

    const imageFile = selectedImage;
    const imageUrl = await uploadImage(imageFile);
    const name = form.name.value;
    const email = form.email.value;

    if (!imageUrl) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to upload image',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }

    const addPublisher = { image: imageUrl, name, email };

    fetch('https://assignment12-server-iota.vercel.app/publishers', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addPublisher)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          refetch();
          Swal.fire({
            title: 'Success!',
            text: 'Successfully added publisher!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          form.reset();
        }
      })
  }

  return (
    <div>
      <SectionTitle heading={"Add Publishers"}></SectionTitle>
      <h2 className='text-4xl text-[#E3963E] font-bold italic ml-5'>
        Total Publishers: {publishers?.length}
      </h2>

      <div class=" py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#efc99d] to-[#E3963E] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl font-semibold text-[#E3963E]">Login Form with Floating Labels</h1>
              </div>


              <form onSubmit={handleAddPublisher} class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                  <div className="relative">
                    <input id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600" placeholder="Publisher's Name" />
                    <label for="password" className="absolute left-0 -top-3.5 text-[#E3963E] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Publisher's Name</label>
                  </div>


                  <div className="relative">
                    <input id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 pl-5 rounded-lg border-[#E3963E]  focus:outline-none focus:borer-rose-600" placeholder="Publisher's Email" />
                    <label for="password" className="absolute left-0 -top-3.5 text-[#E3963E] text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5  peer-focus:text-sm">Publisher's Email</label>
                  </div>

                  <div class="mt-5">
                    <label for="photobutton" class=" text-[#E3963E] text-sm">Photo</label>

                    <div>
                      <input onChange={(e) => setSelectedImage(e.target.files[0])} id="image" name="image" type="file" class="block w-full cursor-pointer appearance-none rounded-l-md border-b-2 rounded-lg border-[#E3963E]  bg-white px-3 py-2 text-sm transition focus:z-10 focus:border-[#E3963E] focus:outline-none focus:ring-1 focus:ring-[#E3963E] disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                    </div>
                  </div>
                  <div class="relative">
                    <button class="bg-[#E3963E] text-white rounded-md px-2 py-1">Add Publisher</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPublisher