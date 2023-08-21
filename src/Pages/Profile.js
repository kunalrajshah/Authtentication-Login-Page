import React, { Fragment, useRef, useContext } from "react";
import AuthContext from "../Components/Store/AuthContext";

const Profile = () => {
  const newPassword = useRef("");
  const AuthCtxt = useContext(AuthContext);
  const apikey=process.env.REACT_APP_API_KEY;

  const SubmitHandler = async (event) => {
    event.preventDefault();
    let newInputPassword = newPassword.current.value;

    try {
      const Response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apikey}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: AuthCtxt.token,
            password: newInputPassword,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (Response.ok) {
        // const Data = await Response.json();
        // console.log("Profile Change", Data);
        alert("Your Password has been changed");
        newInputPassword = "";
      } else {
        const Data = await Response.json();
        let errMessage = "Authentication Failed !";
        if (Data && Data.error && Data.error.message) {
          errMessage = Data.error.message;
        }
        throw new Error(errMessage);
      }
    } catch (err) {
      alert(err.message)
    }
  };
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
          <form onSubmit={SubmitHandler}>
            <input
              type="password"
              placeholder="<PASSWORD>"
              ref={newPassword}
              className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:ring"
              type="Submit"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
