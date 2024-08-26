import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signinImage from "../../assets/Mobile login-bro.svg";
import home from "../../assets/home.png";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Signin = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(true);
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    signIn(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate("/");
      })
      .then((error) => {
        toast.error(error);
      });
  };

  const handlePassword = () => {
    setShow(!show);
    // console.log(show)
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#289278]">
      <div className="relative w-full max-w-3xl bg-white  shadow-lg perspective-1500 flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-2 p-8 space-y-4 w-[50%]"
        >
          <Link to="/">
            <img className="w-8" src={home} alt="" />
          </Link>
          <h1 className="text-3xl text-center font-bold text-[#289278]">
            Sign In
          </h1>
          <div className="relative">
            <i className="fas fa-envelope absolute left-3 top-3 text-[#289278]"></i>
            <input
              type="text"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-[#289278] outline-none"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="relative">
            <i className="fas fa-lock absolute left-3 top-3 text-[#289278]"></i>
            <input
              type={`${show ? "password" : "text"}`}
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-[#289278] outline-none"
            />
            <i
              onClick={handlePassword}
              className="absolute  top-3 right-4 text-xl cursor-pointer"
            >
              {!show ? <FaEye /> : <FaEyeSlash />}
            </i>
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-[#289278] hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#289278] text-white rounded-md hover:bg-[#289278] transition duration-300"
          >
            Submit
          </button>
          <p className="text-center text-sm">
            Dont have an account?{" "}
            <Link
              to="/signup"
              htmlFor="flip"
              className="text-[#289278] cursor-pointer hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </form>
        <div className="bg-[#289278] opacity-70 w-[50%]">
          <img
            src={signinImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
