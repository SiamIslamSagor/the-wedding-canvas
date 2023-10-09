import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [passwordType, setPasswordType] = useState(true);
  const { createUser, updateUserDetails, googleLogin } =
    useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const userProfile = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, userProfile, email, password);

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*\d]{6,}$/.test(password)) {
      return toast(
        "Password must be at least 6 characters long, contain at least one uppercase letter, and have at least one special character."
      );
    }
    // create user
    createUser(email, password)
      .then(() => {
        toast("password register successfully");
        // update user info
        updateUserDetails(name, userProfile)
          .then(result => console.log(result.user))
          .catch(error => console.log(error));

        // clear input field
        e.target.name.value = "";
        e.target.photo.value = "";
        e.target.email.value = "";
        e.target.password.value = "";
        e.target.checkbox.checked = false;
      })
      .catch(error => {
        toast("password register error");
        console.log(error);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        console.log(result.user);
        toast("google login successfully");
      })
      .catch(error => {
        toast("google login error");
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Wedding Canvas | Register</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-left" className="text-center lg:text-left">
          <span className="text-6xl text-custom-color font-logoFont my-2 border-y-2 border-[#bc9b6a]">
            The Wedding Canvas
          </span>
          <p className="py-6">
            Are you ready to embark on your wedding journey with us at THE
            WEDDING CANVAS? We are excited to have you join our community of
            engaged couples and wedding aficionados. Creating an account opens
            doors to endless possibilities. Save your favorite wedding ideas,
            book our exclusive services, stay updated with the latest trends,
            and connect with others on the same joyful path. Lets start building
            beautiful memories together. Sign up today and begin your chapter of
            love and celebration!
          </p>
        </div>
        <div
          data-aos="fade-right"
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                className="input input-bordered border-[#bc9b6a] text-custom-color focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Profile Photo URL*"
                className="input input-bordered border-[#bc9b6a] text-custom-color focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                className="input input-bordered border-[#bc9b6a] text-custom-color focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={`${passwordType ? "password" : "text"}`}
                name="password"
                placeholder="Your Password*"
                className="input input-bordered border-[#bc9b6a] text-custom-color focus:outline-none"
                required
              />
              <span
                onClick={() => setPasswordType(!passwordType)}
                className="cursor-pointer text-gray-500 font-bold text-xl absolute bottom-[313px] right-12"
              >
                {passwordType ? (
                  <AiFillEyeInvisible></AiFillEyeInvisible>
                ) : (
                  <AiOutlineEye></AiOutlineEye>
                )}
              </span>
            </div>
            <div>
              <input
                type="checkbox"
                name="checkbox"
                className="mr-1"
                required
              />
              <label> Accept our Terms & Conditions</label>
              <br></br>
            </div>
            <div className="form-control mt-6">
              <div className="flex justify-center">
                <button className="border  border-[#bc9b6a] bg-[#bc9b6a] text-white font-medium py-3 px-8 rounded-full hover:bg-white duration-700 hover:text-[#bc9b6a]">
                  Register
                </button>
              </div>
              <p className="text-center mt-6 ">
                Already have an account?{" "}
                <Link className="text-blue-700 underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>

          <p className="text-center border-t pt-2">Or</p>
          <p className="text-center">Login With Google</p>
          <button onClick={handleGoogleLogin} className="btn ">
            <FcGoogle></FcGoogle>
            google
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
