
import VehicleItem from "../../molecules/VehicleItem/VehicleItem";
import { ContainerVehicleDetails } from "./style";

interface VehicleDetailsProps {
  data: string[];
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ data }) => {
  return (
    <ContainerVehicleDetails>
      <div>
        <h2>Vehicles</h2>
      </div>
      <div>
        {data.map((e, index) => (
          <VehicleItem value={e} key={index}></VehicleItem>
        ))}
      </div>
    </ContainerVehicleDetails>
  );
};

export default VehicleDetails;
