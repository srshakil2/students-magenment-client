import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Auth } from "../../Context/AuthProvider";
import axios from "axios";

const SingUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { user } = useContext(Auth);
  const navigate = useNavigate();

  // / Todu : send this data firebase/supabase and server
  const handelSubmitSingUp = (e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.name.value;
    const profileImage = formData.photoURL.value;
    const email = formData.email.value;
    const gender = formData.gender.value;
    const password = formData.password.value;

    const contact = formData.contactNo.value;
    const contactNo = toString(contact);
    //
    const confrimPassword = formData.confirmPassword.value;
    // pass validation
    if (password !== confrimPassword) return;

    // Todu : send this data firebase/supabase and server
    const data = {
      name,
      email,
      gender,
      contactNo,
      profileImage,
      password,
    };
    axios
      .post("http://localhost:5000/users", data)
      .then((res) => {
        console.log("Success--------", res);
      })
      .catch((err) => {
        console.log("Errors---------", err);
      });

    // window.location.reload(); //ata bad dite hobe apadoto rakhlam
  };
  return (
    <div id="contact" className="my-5 flex justify-center items-center">
      <div className="w-full md:w-1/2 card shadow-2xl p-5">
        <form onSubmit={(e) => handelSubmitSingUp(e)}>
          <h2 className="text-4xl sm:text-3xl font-bold text-center text-amber-500 mb-5">
            Create Account !
          </h2>
          <p className="text-black font-semibold text-center">
            Sign In now to join our AaRuconnect education community.
          </p>
          <div className="lg:w-10/12 mx-auto">
            {/* Full name */}
            <div className="h-auto mt-10">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full-name"
                  required
                  className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Photo-Url */}
            <div className="h-auto mt-6">
              <div className="w-full">
                <input
                  type="text"
                  name="photoURL"
                  // placeholder="Your Photo URL"
                  required
                  className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* gender option */}
            <div className="h-auto mt-6 text-black">
              <select
                id="gender"
                name="gender"
                defaultValue=""
                required
                className="mt-1 p-2 border-b-2 border-gray-600 rounded-md w-full bg-white focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* email */}
            <div className="h-auto mt-6">
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            {/* contact Info */}
            <div className="h-auto mt-6">
              <div className="w-full">
                <input
                  type="number"
                  name="contactNo"
                  placeholder="Your Contact Number"
                  required
                  className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            {/* Pass */}
            <div className="h-auto mt-6">
              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  required
                  className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black focus:outline-none focus:border-blue-500"
                />
                {/* show pass */}
                <span
                  className="absolute top-3 right-3 cursor-pointer text-xl text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            {/* Confirm Pass */}
            <div className="h-auto mt-6">
              <div className="w-full relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="confirm password"
                  required
                  className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black focus:outline-none focus:border-blue-500"
                />
                <span
                  className="absolute top-3 right-3 cursor-pointer text-xl text-gray-600"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
          </div>
          {/* Link up Login page */}
          <div className="text-black lg:w-10/12 w-full mx-auto mt-2 ">
            <p>
              You have an account please?{" "}
              <NavLink
                to={"/login"}
                className="underline underline-offset-2 font-semibold text-[#3d3b8df3]"
              >
                LogIn
              </NavLink>
            </p>
          </div>
          {/* Sing Up btn */}
          <button
            type="submit"
            className="btn hover:bg-transparent mt-12 text-xl font-bold bg-transparent text-[#151434f3] flex items-center gap-3 border-2 px-3 rounded-md py-5 lg:w-10/12 w-full mx-auto"
          >
            Sing Up
          </button>
        </form>
      </div>
      {/* Animation */}
      {/* Todu: */}
    </div>
  );
};

export default SingUp;
