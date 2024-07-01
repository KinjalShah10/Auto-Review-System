import React, { useContext } from "react";
import { FaFacebookF, FaGoogle, FaPhone} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, login } = useContext(AuthContext);
  // redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        alert("Account creation successfully done!");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="max-w-md shadow w-full h-full mx-auto items-center justify-center my-20 bg-cover bg-center bg-[url('./assets/FeedBack.jpg')] bg-opacity-20">
        
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-2xl">Create An Account</h3>

          {/* email */}
          <div className="form-control py-5">
            <label className="label">
              <span className="label-text">Email : </span>
            </label>
            <input 
              type="email"
              placeholder="email"
              className="input input-bordered rounded-md mt-2"
              {...register("email")}
            />
          </div>
          {/* Phone */}
          <div className="form-control space-y-2">
            <label className="label">
              <span className="label-text">Mobile Number : </span>
            </label>
            <input
              type="number"
              placeholder="Mobile Number"
              className="input input-bordered rounded-md mt-2"
              {...register("number")}
            />
          </div>


          {/* password */}
          <div className="form-control mt-3 mb-4 space-y-4">
            <label className="label">
              <span className="label-text">Password : </span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered rounded-md"
              {...register("password")}
            />

            <div className="py-6">

            <label className="label mt-1 text-xl">
              <a href="#" className="label-text-alt link link-hover underline">
                Forgot password?
              </a>
            </label>

            </div>
          </div>

          {/* error */}

          {/* login btn */}
          <div className="form-control">
            <input
              type="submit"
              value="Signup"
              className="btn text-black rounded-lg text-xl cursor-pointer"
            />
          </div>

          <p className="text-center my-2">
            Have an account?{" "}
            <button
              className="underline text-red ml-1"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </button>{" "}
          </p>

          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>

        {/* social sign in */}
        <div className="text-center space-x-3 mb-5 mt-4">
          <button className="btn btn-circle hover:text-white">
            <FaGoogle />
          </button>
          {/* <button className="btn btn-circle hover:text-white">
            <FaFacebookF />
          </button> */}
          <button className="btn btn-circle hover:text-white">
            <FaPhone />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;