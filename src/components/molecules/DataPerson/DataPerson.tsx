import { ContainerDataPerson } from "./style";

interface DataPersonProps {
  name: string;
  type: string;
}

const DataPerson: React.FC<DataPersonProps> = ({ name, type }) => {
  return (
    <ContainerDataPerson>
      <h2>{name}</h2>
      <p>{type}</p>
    </ContainerDataPerson>
  );
};

export default DataPerson;
