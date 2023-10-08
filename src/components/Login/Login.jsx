import { Link } from "react-router-dom";

const Login = () => {
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
          <form className="card-body">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
