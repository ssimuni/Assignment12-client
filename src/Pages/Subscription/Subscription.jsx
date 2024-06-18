import React from 'react'
import Select from 'react-select';

const Subscription = () => {


  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      borderBottom: `2px solid ${state.isFocused ? '#E3963E' : '#E3963E'}`,
      boxShadow: state.isFocused ? '0 1px 0 0 #E3963E' : 'none',
      '&:hover': {
        borderBottom: `2px solid #E3963E`,
      },

    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#E3963E' : state.isFocused ? '#E5E7EB' : null,
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: '#E3963E',
        color: 'white',
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#E3963E',
      color: 'white',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
  };


  const options = [
    { value: '1 minute', label: '1 minute' },
    { value: '5 days', label: '5 days' },
    { value: '10 days', label: '10 days' }
  ];

  return (
    <div>
      <div style={{
        backgroundImage: 'url(p1.jpg)'
      }} class="h-full w-full bg-cover bg-center bg-fixed bg-no-repeat dark:bg-gray-800 font-[sans-serif] relative mx-auto rounded overflow-hidden mt-4">

        <div class="grid sm:grid-cols-2 items-center  py-10 border-y-8 border-orange-400">
          <div
            class="px-6 py-10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg lg:w-96 mx-auto">
            <h4 class="mt-2 text-4xl font-semibold text-gray-100 text-center">Subscribe for best experience!</h4>
           

            <div className="mb-10 mt-5">
              <h4 className="text-white mb-3">
                Choose your subscription period
              </h4>
              <Select
                id="publisher" name="publisher"
                options={options}
                styles={customStyles}
                className="w-full"
                placeholder="Select sebscription period"
              />
            </div>
            <button class="w-full h-12 text-white text-base font-semibold leading-6 rounded transition-all duration-700 hover:bg-orange-500 bg-[#E3963E] shadow-sm">Subscribe</button>
          </div>

          <div class="bg-white bg-opacity-40 rounded-tl-full rounded-bl-full w-full h-max">
            <div class="lg:flex p-2">
              <img src="https://readymadeui.com/team-image.webp" class="h-64 w-64 rounded-full object-cover border-4 border-[#E3963E]" alt="img" />
              <img className=' h-[135px] m-auto' src="logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription