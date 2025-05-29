'use client';

import React, { useState } from 'react';

const Card = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    apt: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Address Saved:', formData);
    alert('Address saved successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      street: '',
      apt: '',
      state: '',
      zip: '',
    });
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      street: '',
      apt: '',
      state: '',
      zip: '',
    });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-8 max-w-6xl mx-auto text-black dark:text-white">
      {/* Shipping Form */}
      <div className="flex-1 border border-black dark:border-white rounded-lg p-6 bg-white dark:bg-black">
        <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
          <span className="text-red-600 text-xl">⬤</span>
          Add New Address
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded w-full"
              required
            />
          </div>

          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street Address"
            className="border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded w-full"
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              name="apt"
              value={formData.apt}
              onChange={handleChange}
              placeholder="Apt Number"
              className="border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded w-full"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              placeholder="Zip"
              className="border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded w-full"
              required
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full border border-black dark:border-white py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:opacity-90 dark:bg-white dark:text-black"
            >
              Save This Address
            </button>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-[350px] border border-black dark:border-white rounded-lg p-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
        <p className="text-sm mb-4">
          By placing your order, you agree to our company{' '}
          <span className="underline cursor-pointer">Privacy policy</span> and{' '}
          <span className="underline cursor-pointer">Conditions of use</span>.
        </p>
        <hr className="my-4 border-black dark:border-white" />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Items - Silhouette No. 1 – Vermilion</span>
            <span>7,999</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping and handling:</span>
            <span>200</span>
          </div>
          <div className="flex justify-between">
            <span>Before tax:</span>
            <span>6,599</span>
          </div>
          <div className="flex justify-between">
            <span>Tax Collected:</span>
            <span>1,400</span>
          </div>
        </div>

        <hr className="my-4 border-black dark:border-white" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Order Total:</span>
          <span>8,199</span>
        </div>

        <button className="w-full bg-black text-white py-2 rounded mt-6 hover:opacity-90 dark:bg-white dark:text-black">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Card;