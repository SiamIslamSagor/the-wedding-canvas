import { Link } from "react-router-dom";
import errorImg from "../../assets/err.png";
import { BsChevronDoubleLeft } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex  flex-col lg:flex-row justify-between container items-center mx-auto">
        <div>
          <img src={errorImg} alt="error img" />
        </div>
        <div className="border p-10 rounded-lg">
          <h2 className="text-5xl">Page not found</h2>
          <Link to="/">
            <button className="btn mt-4 btn-ghost text-blue-700 font-bold">
              <BsChevronDoubleLeft></BsChevronDoubleLeft>
              Go Back Our Side
            </button>
          </Link>
          <hr />
          <p className="max-w-sm">
            Our apologies, but it seems that something has gone wrong. We are
            experiencing technical difficulties and are actively working to
            resolve the issue. Please try again later, or contact our support
            team for assistance. Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
