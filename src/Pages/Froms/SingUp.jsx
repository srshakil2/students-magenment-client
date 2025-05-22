import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const SingUp = () => {
  // / Todu : send this data firebase/supabase and server
  const handelSubmitSingUp = (e) => {
    e.preventDefault();
    const formData = e.target;
    const fullName = formData.name.value;
    const photoURL = formData.photoURL.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const confrimPassword = formData.confirmPassword.value;

    const data = {
      fullName: fullName,
      photoURL: photoURL,
      email: email,
      password: password,
      confrimPassword: confrimPassword,
    };
    console.log(fullName, photoURL, email, password, confrimPassword);
    console.log(data);
    // Todu : send this data firebase/supabase and server
  };
  return (
    <div id="contact" className="">
      <div className="flex  flex-col-reverse md:flex-row-reverse  justify-between  text-[#F2F2F2] items-center gap-10 ">
        <div className="w-full md:w-1/2">
          <form onSubmit={(e) => handelSubmitSingUp(e)}>
            <h2 className="text-4xl sm:text-3xl font-bold text-center text-amber-500 mb-5">
              Create Account !
            </h2>
            <p className="text-black font-semibold text-center">
              Sign In now to join our AaRuconnect education community.
            </p>
            <div className="lg:w-10/12 mx-auto">
              {/* First-name */}
              <div className="h-auto mt-10">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full-name"
                    required
                    className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black"
                  />
                </div>
              </div>

              {/* Photo-Url */}
              <div className="h-auto mt-10">
                <div className="w-full">
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="Your Photo URL"
                    required
                    className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black"
                  />
                </div>
              </div>
              {/* email */}
              <div className="h-auto mt-10">
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black"
                  />
                </div>
              </div>
              {/* Pass */}
              <div className="h-auto mt-10">
                <div className="w-full ">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black"
                  />
                </div>
              </div>
              {/* Confirm Pass */}
              <div className="h-auto mt-10">
                <div className="w-full ">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm password"
                    required
                    className="mt-1 p-2  border-b-2 border-gray-600 rounded-md w-full text-black"
                  />
                </div>
              </div>
              {/* pass hidden and show btn */}
              <div></div>
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
    </div>
  );
};

export default SingUp;
