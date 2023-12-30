// import { useParams } from "react-router-dom";
import useWindowWidth from "../../../hooks/useWidth";
import { ContainerNavBar } from "./style";
import ArrowLeft from "../../atom/ArrowLeft/ArrowLeft";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePersons } from "../../../hooks/usePersons";
import { Person } from "../../../types/PersonType";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const windowWidth = useWindowWidth();
  const navigate = useNavigate();
  const { pathname } = window.location;

  // const { slug } = useParams();
  const [person, setPerson] = useState<Person>({} as Person);

  const { getOnePerson } = usePersons();
  const slug = pathname.split("/")[1];

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        const result = await getOnePerson(slug as string);
        setPerson(result);
      };

      fetchData();
    }
  }, []);
  return (
    <ContainerNavBar>
      {slug && windowWidth < 700 && (
        <div
          style={{ position: "absolute", left: 20, cursor: "pointer" }}
          onClick={(e) => navigate(-1)}
        >
          <ArrowLeft />
        </div>
      )}
      <h1>
        {windowWidth < 700 && slug
          ? person.name
          : windowWidth < 700
          ? "People of Star Wars"
          : "Ravn Star Wars Registry"}
      </h1>{" "}
    </ContainerNavBar>
  );
};

export default NavBar;
