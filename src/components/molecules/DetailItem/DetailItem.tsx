import TitleAtom from "../../atom/TitleAtom/TitleAtom";
import ValueAtom from "../../atom/ValueAtom/ValueAtom";
import { CotanierDetailItem } from "./style";

interface DetailItemProps {
  title: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ title, value }) => {
  return (
    <CotanierDetailItem>
      <TitleAtom title={title}></TitleAtom>
      <ValueAtom value={value}></ValueAtom>
    </CotanierDetailItem>
  );
};

export default DetailItem;
