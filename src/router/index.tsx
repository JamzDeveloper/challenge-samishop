import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../components/page/DetailsPage/DetailsPage";
import HomePage from "../components/page/HomePage/HomePage";
import NavBar from "../components/organisms/NavBar/NavBar";
import useWindowWidth from "../hooks/useWidth";
import PersonTemplate from "../components/templates/Persons/Persons";
import { PersonProvider } from "../context/PersonContext";

interface RouterProps {}

const Router: React.FC<RouterProps> = () => {
  const windowWidth = useWindowWidth();

  return (
    <BrowserRouter>
      <PersonProvider>
        <NavBar />
        {windowWidth < 700 ? (
          <>
            <Routes>
              <Route path="/:slug" Component={DetailsPage} />
              <Route path="/" Component={HomePage} />
            </Routes>
          </>
        ) : (
          <div style={{ display: "flex", width: "100vw" }}>
            <PersonTemplate
              styleTemplate={{
                width: "300px",
                borderRight: "1px solid #333333",
              }}
            ></PersonTemplate>
            <Routes>
              <Route path="/:slug" Component={DetailsPage} />
            </Routes>
          </div>
        )}
      </PersonProvider>
    </BrowserRouter>
  );
};

export default Router;
