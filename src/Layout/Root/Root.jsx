import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Root = () => {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="container mx-auto">
        <ScrollTop></ScrollTop>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
