import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-[#a3a3a39d] flex justify-center items-center">
      <div className="bg-white p-10 rounded-xl flex gap-4 flex-col items-center justify-center">
        <h2 className="text-5xl">Page not found</h2>
        <Link to="/">
          <button className="btn btn-ghost underline text-blue-700 font-bold">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
