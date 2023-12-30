
import { createContext, useContext } from "react";
import { usePersons } from "../hooks/usePersons";


export const PersonContext = createContext({} );

interface Props {
  children: React.ReactNode;
}

export const PersonProvider: React.FC<Props> = ({ children }) => {
  const person = usePersons();

  return <PersonContext.Provider value={person}>{children}</PersonContext.Provider>;
};

export const usePersonContext = () => useContext(PersonContext);
