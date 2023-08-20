import React, { Fragment } from "react";

const Profile = () => {
  return (
    <Fragment>
      <div className=" flex items-center justify-center mt-40">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Your User Profile
          </h1>
          <label className="block text-gray-600 mb-1 text-center">
            New Password
          </label>
          <input
            type="password"
            placeholder="<PASSWORD>"
            className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring">
            Change Password
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
