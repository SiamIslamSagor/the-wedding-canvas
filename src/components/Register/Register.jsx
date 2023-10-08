import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
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
          <form className="card-body">
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
                  Register
                </button>
              </div>
              <p className="text-center mt-6">
                Already have an account?{" "}
                <Link className="text-blue-700 underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
