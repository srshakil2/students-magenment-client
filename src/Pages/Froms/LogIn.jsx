import { FcGoogle } from "react-icons/fc";
import LottieAnimation from "../../assets/Animation - 1747566620376.json";
import { NavLink } from "react-router-dom";

const LogIn = () => {
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
    console.log(email, password);
    console.log(data);
  };

  return (
    <div id="contact" className="mb-5">
      <div className="flex  flex-col-reverse md:flex-row-reverse  justify-between  text-[#F2F2F2] items-center gap-10 ">
        <div className="w-full md:w-1/2">
          <form onSubmit={(e) => handelSubmit(e)}>
            <h2 className="text-4xl sm:text-3xl font-bold text-center text-amber-500 mb-5">
              Welcome to Education System !
            </h2>
            <p className="text-black font-semibold text-center">
              Sign In now to join our AaRuconnect education community.
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
              {/* pass hidden and show btn */}
              <div></div>
            </div>
            <div className="text-black lg:w-10/12 w-full mx-auto mt-2 flex justify-between">
              <p className="underline">Forgot Password?</p>
              <p>
                Do no't have an account please?{" "}
                <NavLink
                  to={"/singUp"}
                  className="underline underline-offset-2 font-semibold text-[#3d3b8df3]"
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
        <div className="w-full md:w-1/2">{/* <LottieAnimation /> */}</div>
      </div>
    </div>
  );
};

export default LogIn;
