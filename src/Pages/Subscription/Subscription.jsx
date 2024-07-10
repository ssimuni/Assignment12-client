import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const Subscription = () => {
  const [selectedOption, setSelectedOption] = useState(null);

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
    { value: '1 minute', label: '1 minute', price: 1 },
    { value: '5 days', label: '5 days', price: 5 },
    { value: '10 days', label: '10 days', price: 10 },
  ];

  return (
    <div>
      <div
        style={{ backgroundImage: 'url(p1.jpg)' }}
        className="h-full w-full bg-cover bg-center bg-fixed bg-no-repeat  font-[sans-serif] relative mx-auto rounded overflow-hidden mt-4"
      >
        <div className="grid sm:grid-cols-2 items-center py-10 border-y-8 border-orange-400">
          <div className="px-6 py-10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-opacity-20 duration-200 transform rounded-lg lg:w-96 mx-auto">
            <h4 className="mt-2 text-4xl font-semibold text-gray-100 text-center">
              Subscribe for best experience!
            </h4>
            <div className="mb-10 mt-5">
              <h4 className="text-white mb-3">Choose your subscription period</h4>
              <Select
                id="period"
                name="period"
                options={options}
                styles={customStyles}
                className="w-full"
                placeholder="Select subscription period"
                onChange={(option) => setSelectedOption(option)}
              />
            </div>
            <div className="flex justify-between items-center">
              <Link
                to={`/payment?price=${selectedOption?.price}`}
                className="w-26 text-center h-12 p-3 text-white text-base font-semibold leading-6 rounded transition-all duration-700 hover:bg-orange-500 bg-[#E3963E] shadow-sm"
              >
                Subscribe
              </Link>
              {selectedOption && (
                <span className="text-white text-lg font-bold ml-3">
                  ${selectedOption.price}
                </span>
              )}
            </div>
          </div>
          <div className="bg-white bg-opacity-40 rounded-tl-full rounded-bl-full w-full h-max">
            <div className="lg:flex p-2">
              <img
                src="https://readymadeui.com/team-image.webp"
                className="hidden lg:block h-64 w-64 rounded-full object-cover border-4 border-[#E3963E]"
                alt="img"
              />
              <img className="h-[135px] hidden lg:block m-auto" src="logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
