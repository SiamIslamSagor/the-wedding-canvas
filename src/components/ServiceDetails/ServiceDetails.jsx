import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getIdInLS } from "../../localStorage";

const ServiceDetails = () => {
  const { services } = useContext(AuthContext);
  const clickedID = getIdInLS();
  const clickedService = services.find(service => service.id === clickedID);
  console.log(clickedService);
  return (
    <div>
      <h3>details are coming</h3>
    </div>
  );
};

export default ServiceDetails;
