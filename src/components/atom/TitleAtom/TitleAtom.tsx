import { TitleItem } from "./style";

interface TitleAtomProps {
  title: string;
}

const TitleAtom: React.FC<TitleAtomProps> = ({ title }) => {
  return <TitleItem>{title}</TitleItem>;
};

export default TitleAtom;
