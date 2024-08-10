import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../assets/Mobile login-pana.svg";
import home from "../../assets/home.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, name, password, phone, role } = data;
    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password must contain at least one lowercase letter", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must contain at least one uppercase letter", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else if (password.length < 6) {
      toast.error("Password must be 6 characters or higher", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result.user, "user");
          updateUserProfile(name)
            .then(() => {
              const userInfo = {
                name: name,
                email: email,
                password: password,
                role: role,
                number: phone,
                date: new Date(),
              };
              axiosPublic.post("/users/register-user", userInfo).then((res) => {
                toast.success("User registered successfully!");
                if (res.data.insertedId) {
                  reset();
                  navigate("/");
                }
              });
              reset();
              navigate("/");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handlePassword = () => {
    setShow(!show);
    // console.log(show)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#289278]">
      <div className="relative w-full max-w-3xl bg-white  shadow-lg perspective-1500 flex">
        <div className="bg-[#289278] opacity-70 w-[50%]">
          <img
            src={signUpImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-2 p-8 space-y-4 w-[50%]"
        >
          <Link className="flex justify-end" to="/">
            <img className="w-8" src={home} alt="" />
          </Link>
          <h1 className="text-3xl text-center font-bold text-[#289278]">
            Sign Up
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
          <div className="relative">
            <i className="fas fa-lock absolute left-3 top-3 text-[#289278]"></i>
            <input
              type="text"
              placeholder="Enter your Phone"
              {...register("phone", { required: true })}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-[#289278] outline-none"
            />
            {errors.phone && (
              <span className="text-red-600">phone is required</span>
            )}
          </div>
          <div className="relative">
            <i className="fas fa-lock absolute left-3 top-3 text-[#289278]"></i>
            <select
              {...register("role", { required: true })}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-[#289278] outline-none"
            >
              <option value="">Select your role</option>
              <option value="seeker">Seeker</option>
              <option value="provider">Provider</option>
            </select>
            {errors.role && (
              <span className="text-red-600">Role is required</span>
            )}
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
              to="/login"
              htmlFor="flip"
              className="text-[#289278] cursor-pointer hover:underline"
            >
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
