import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Components/Store/AuthContext";

const LoginPage = () => {
  const AuthCtxt = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const EmailUser = useRef("");
  const PasswordUser = useRef("");

  const toggleTextHandler = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let EnteredEmail = EmailUser.current.value;
    let EnteredPassword = PasswordUser.current.value;

    const UserDetails = {
      email: EnteredEmail,
      password: EnteredPassword,
      returnSecureToken: true,
    };
    const apikey=process.env.REACT_APP_API_KEY;

    setIsLoading(true);
    // Fetching DATA
    let URL;
    if (isLogin) {
      URL =
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apikey}`;
    } else {
      URL =
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}`;
    }
    try {
      const Response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(UserDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      if (Response.ok) {
        const Data = await Response.json();
        AuthCtxt.Login(Data.idToken); //Seting token here.
        navigate("/");
        EmailUser.current.value = "";
        PasswordUser.current.value = "";
      } else {
        const Data = await Response.json();
        let errMessage = "Authentication Failed !";
        if (Data && Data.error && Data.error.message) {
          errMessage = Data.error.message;
        }
        throw new Error(errMessage);
      }
    } catch (err) {
      alert(err.message);
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
          {!isLoading && (
            <button
              type="Submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && (
            <p className="text-center text-xl text-red-600 font-semibold">
              Sending Request ....
            </p>
          )}
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
