import { FcGoogle } from "react-icons/fc";

import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Auth } from "../../Context/AuthProvider";
import axios from "axios";
import singUpInfo from "../../Shared/LocalStorag/createAccauntLocalStorag";
import Swal from "sweetalert2";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, setLoding } = useContext(Auth);
  const navigate = useNavigate();
  // console.log(user);
  // Todu: ---->data: email, pass
  const handelSubmit = (e) => {
    e.preventDefault();
    const formsData = e.target;
    const email = formsData.email.value;
    const password = formsData.password.value;

    const data = {
      email: email,
      password: password,
    };
    // console.log(data);
    // Todu: user log in
    axios
      .post("http://localhost:5000/users/login", data)
      .then((res) => {
        const resEmail = JSON.parse(res?.config?.data);
        console.log(resEmail);
        const token = res?.data?.token;
        if (token) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Log In Success",
            showConfirmButton: false,
            timer: 1500,
          });
          singUpInfo(token, setLoding);
          navigate("/");
          // window.location.reload();
        }
      })
      .catch((err) => {
        console.log("error----", err);
      });
  };

  return (
    <div id="contact" className="my-5 lg:flex justify-center items-center">
      {/* img */}
      <div className="lg:w-1/2 lg:block md:hidden hidden">
        <img
          className=""
          src="https://i.ibb.co/7xFq5wf7/login.jpg"
          alt="LogIn"
        />
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto card shadow-2xl p-5">
        <form onSubmit={(e) => handelSubmit(e)}>
          <h2 className="lg:text-3xl text-2xl font-bold text-center text-amber-500 mb-5">
            Welcome to Education System !
          </h2>
          <p className="text-black font-semibold text-center">
            Please, Log In now to join our AaRuconnect education community.
          </p>
          <div className="lg:w-10/12 mx-auto">
            {/* email */}
            <div className="h-auto mt-10">
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
            {/* Pass */}
            <div className="h-auto mt-10">
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
            {/* pass hidden and show btn */}
            <div></div>
          </div>
          <div className="text-black lg:w-10/12 w-full mx-auto mt-2 flex justify-between">
            <p className="underline">Forgot Password?</p>
            <p className="">
              Do no't have an account please?{" "}
              <NavLink
                to={"/singUp"}
                className="underline underline-offset-2 font-semibold text-[#3d3b8df3] "
              >
                Sing Up
              </NavLink>
            </p>
          </div>

          <button
            type="submit"
            className="btn hover:bg-transparent mt-12 text-xl font-bold bg-transparent text-[#151434f3] flex items-center gap-3 border-2 px-3 rounded-md py-5 lg:w-10/12 w-full mx-auto"
          >
            Login
          </button>
        </form>
        <div>
          <button className="flex items-center justify-center text-xl font-bold btn w-full lg:w-10/12 mt-5 mx-auto">
            <span className="mt-1">
              <FcGoogle></FcGoogle>
            </span>
            <span className="-ml-[8px] text-[#151434f3]">oogle</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
