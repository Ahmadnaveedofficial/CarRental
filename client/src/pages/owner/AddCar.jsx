import React, { useState } from "react";
import Title from "../../components/owner/Title.jsx";
import {assets}  from "../../assets/assets.js";

const AddCar = () => {
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });

  const onSubmitHandle = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add new car"
        subTitle="Fill in details to list a new car for booking, including pricing availability, and car specifications."
      />
      <form
        onSubmit={onSubmitHandle}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* car image */}
        <div className="flex items-center w-full gap-3">
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon }  className='h-14 rounded cursor-pointer' alt="" />
            <input type="file" id="car-image" accept="image/*" hidden onChange={e=>setImage(e.target.files[0])}/>
          </label>  
          <p className="font-sm  text-gray-500">Upload a picture of your car</p>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
