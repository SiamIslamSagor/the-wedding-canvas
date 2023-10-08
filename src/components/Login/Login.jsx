import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { googleLogin, signIn } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    // log in
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        toast("pass login successfully");
      })
      .catch(error => {
        toast("Invalid email or password");
        console.log(error);
      });
  };

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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div data-aos="fade-right" className="text-center lg:text-left">
          <span className="text-6xl text-custom-color font-logoFont my-2 border-y-2 border-[#bc9b6a]">
            The Wedding Canvas
          </span>
          <p className="py-6">
            Welcome back to THE WEDDING CANVAS! We are thrilled to have you back
            with us. Logging in is your gateway to a world of personalized
            experiences. Gain access to your profile, view your saved wedding
            inspirations, manage your bookings, and connect with fellow wedding
            enthusiasts. Your journey continues here. Enter your credentials and
            step into the world of happily ever after.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <form onSubmit={handleSubmit} className="card-body">
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
                type="password"
                name="password"
                placeholder="Your Password*"
                className="input input-bordered border-[#bc9b6a] text-custom-color focus:outline-none"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <div className="flex justify-center">
                <button className="border  border-[#bc9b6a] bg-[#bc9b6a] text-white font-medium py-3 px-8 rounded-full hover:bg-white duration-700 hover:text-[#bc9b6a]">
                  Login
                </button>
              </div>
              <p className="text-center mt-6">
                New Here?{" "}
                <Link className="text-blue-700 underline" to="/register">
                  Register
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

export default Login;
