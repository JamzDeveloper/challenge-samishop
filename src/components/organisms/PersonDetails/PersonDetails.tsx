import DetailItem from "../../molecules/DetailItem/DetailItem";
import { ContainerPersonDetails } from "./style";

interface Data {
  key: string;
  value: string;
}
interface PersonDetailsProps {
  data: Array<Data>;
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ data }) => {
  return (
    <ContainerPersonDetails>
      <div>
        <h1>General Information</h1>
      </div>
      {data.map((e, index) => {
        return (
          <DetailItem title={e.key} value={e.value} key={index}></DetailItem>
        );
      })}
    </ContainerPersonDetails>
  );
};

export default PersonDetails;
