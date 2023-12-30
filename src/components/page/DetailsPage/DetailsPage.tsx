import { useParams } from "react-router-dom";
import PersonDetails from "../../organisms/PersonDetails/PersonDetails";
import VehicleDetails from "../../organisms/VehicleDetails/VehicleDetails";
import { ContainerDetailsPage, SectionDetailPage } from "./style";
import { usePersons } from "../../../hooks/usePersons";
import { useEffect, useState } from "react";
import { Person } from "../../../types/PersonType";
import { LoaderUI } from "../../atom/LoaderUI";
interface DetailsPageProps {}

const DetailsPage: React.FC<DetailsPageProps> = () => {
  const { slug } = useParams();

  const [person, setPerson] = useState<Person|null>();

  const { getOnePerson, loading } = usePersons();

  useEffect(() => {
    setPerson(null);
    if (slug) {
      const fetchData = async () => {
        const result = await getOnePerson(slug as string);
     
        setPerson(result);
      };

      fetchData();
    }
  }, [slug]);
  return (
    <>
      {slug && (
        <>
          <SectionDetailPage>
            <ContainerDetailsPage>
              {loading && !person && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <LoaderUI></LoaderUI>
                </div>
              )}
              {!loading && person && (
                <>
                  <PersonDetails
                    data={[
                      {
                        key: "Eye Color",
                        value: person.eye_color,
                      },
                      {
                        key: "Height",
                        value: person.height,
                      },
                      {
                        key: "Skin Color",
                        value: person.skin_color,
                      },
                      {
                        key: "Birth Year",
                        value: person.birth_year,
                      },
                    ]}
                  ></PersonDetails>
                  <br></br>
                  <VehicleDetails data={person.vehiclesName} />
                </>
              )}
            </ContainerDetailsPage>
          </SectionDetailPage>
        </>
      )}
    </>
  );
};

export default DetailsPage;
