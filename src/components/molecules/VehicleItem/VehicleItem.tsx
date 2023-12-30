import TitleAtom from "../../atom/TitleAtom/TitleAtom";
import { CotanierVehicleItem } from "./style";

interface VehicleItemProps {
  value: string;
}

const VehicleItem: React.FC<VehicleItemProps> = ({ value }) => {
  return (
    <CotanierVehicleItem>
      {" "}
      <TitleAtom title={value} />
    </CotanierVehicleItem>
  );
};

export default VehicleItem;
