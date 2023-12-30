import { Link } from "react-router-dom";
import ArrowRight from "../../atom/ArrowRight/ArrowRight";
import { ContainerPerson } from "./style";
import DataPerson from "../../molecules/DataPerson/DataPerson";
import { Person } from "../../../types/PersonType";

interface CardPersonProps {
  person: Person;
}

const CardPerson: React.FC<CardPersonProps> = ({ person }) => {
  return (
    <Link
      to={`${person.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ContainerPerson>
        <DataPerson
          name={person.name}
          type={person.especiePrincipal ?? "No Definido"}
        ></DataPerson>
        <ArrowRight />
      </ContainerPerson>
    </Link>
  );
};

export default CardPerson;
