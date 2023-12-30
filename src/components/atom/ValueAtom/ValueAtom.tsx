import { ValueItem } from "./style";

interface ValueAtomProps {
  value: string;
}

const ValueAtom: React.FC<ValueAtomProps> = ({ value }) => {
  return <ValueItem>{value}</ValueItem>;
};

export default ValueAtom;
