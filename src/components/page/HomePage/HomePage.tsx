
import PersonTemplate from "../../templates/Persons/Persons";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <PersonTemplate></PersonTemplate>
    </div>
  );
};

export default HomePage;
