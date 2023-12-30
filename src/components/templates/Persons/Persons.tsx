import { usePersons } from "../../../hooks/usePersons";
import { LoaderUI } from "../../atom/LoaderUI";
import CardPerson from "../../organisms/CardPerson/CardPerson";
import { SectionPerson } from "./style";

interface PersonTemplateProps {
  styleTemplate?: React.CSSProperties;
}

const PersonTemplate: React.FC<PersonTemplateProps> = ({ styleTemplate }) => {
  const { person, loading } = usePersons();
  return (
    <SectionPerson style={styleTemplate ? styleTemplate : {}}>
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LoaderUI />
        </div>
      )}
      {person.map((e, index) => (
        <CardPerson key={index} person={e}></CardPerson>
      ))}
    </SectionPerson>
  );
};

export default PersonTemplate;
