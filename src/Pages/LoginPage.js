import React, { useState, useRef } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const EmailUser = useRef("");
  const PasswordUser = useRef("");

  const toggleTextHandler = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

 
  const submitHandler = (event) => {
    event.preventDefault();

    let EnteredEmail = EmailUser.current.value;
    let EnteredPassword = PasswordUser.current.value;

    const UserDetails = {
      email: EnteredEmail,
      password: EnteredPassword,
      returnSecureToken: true,
    };

    if (isLogin) {
      //.....
    } else {
      fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOXHgDlb77PEn3G_YXmJvzMx620ExFDuI',
        {
          method: "POST",
          body: JSON.stringify(UserDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((Response) => {
        if (Response.ok) {
          console.log("Data Send SuccessFul !!");
          EmailUser.current.value = "";
          PasswordUser.current.value = "";
        } else {
          return Response.json().then((data) => {
            // Handle Error Modal
            console.log("Return Data", data);
          });
        }
      });
    }
  };

  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Your Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              ref={EmailUser}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Your Password</label>
            <input
              type="password"
              className="w-full border p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              ref={PasswordUser}
            />
          </div>
          <button
            type="Submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>
        <div className="text-center mt-2">
          <button
            className="text-blue-500 border-none"
            onClick={toggleTextHandler}
          >
            {isLogin ? "Create new account" : "Login With existing account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
