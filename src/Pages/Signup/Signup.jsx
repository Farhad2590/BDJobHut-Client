import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import signUpImage from "../../assets/Mobile login-pana.svg"
import home from "../../assets/home.png"

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#289278]">
      <div className="relative w-full max-w-3xl bg-white  shadow-lg perspective-1500 flex">
        <div className="bg-[#289278] opacity-70 w-[50%]">
          <img src={signUpImage} alt="" className="w-full h-full object-cover" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 p-8 space-y-4 w-[50%]">
          <Link className="flex justify-end" to="/">
            <img className="w-8" src={home} alt="" />
          </Link>
          <h1 className="text-3xl text-center font-bold text-[#289278]">Sign Up</h1>
          <div className="relative">
            <i className="fas fa-envelope absolute left-3 top-3 text-[#289278]"></i>
            <input
              type="text"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-[#289278] outline-none"
            />
            {errors.email && <span className="text-red-600">Email is required</span>}
          </div>
          <div className="relative">
            <i className="fas fa-lock absolute left-3 top-3 text-[#289278]"></i>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-300 focus:border-[#289278] outline-none"
            />
            {errors.password && <span className="text-red-600">Password is required</span>}
          </div>
          <button type="submit" className="w-full py-2 bg-[#289278] text-white rounded-md hover:bg-[#289278] transition duration-300">Submit</button>
          <p className="text-center text-sm">Dont have an account? <Link to='/login' htmlFor="flip" className="text-[#289278] cursor-pointer hover:underline">Sign up now</Link></p>
        </form>

      </div>
    </div>
  );
};

export default Signup;
