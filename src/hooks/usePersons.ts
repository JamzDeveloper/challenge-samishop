import Axios from "axios";
import { useEffect, useState } from "react";
import { Person } from "../types/PersonType";
import { VehicleModel } from "../types/vehicleType";

export const usePersons = () => {
  const dataInitial = [1, 2,3,4];

  const [person, setPerson] = useState<Array<Person | any>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (person.length === 0) {
        setLoading(true);

        try {
          const newData = await Promise.all(createPromises(dataInitial));
          setPerson((prevPerson) => [...prevPerson, ...newData]);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  const createPromises = (data: number[]) => {
    return data.map((e) => {
      return new Promise(async (resolve, reject) => {
        try {
          const { data: personData }: { data: Person } = await Axios.get(
            `https://swapi.dev/api/people/${e}`
          );

          let newPerson: Person = { ...personData, id: e };

          if (personData.species.length > 0) {
            const { data: especiePrincipal } = await Axios.get(
              personData.species[0]
            );
            newPerson = {
              ...newPerson,
              id: e,
              especiePrincipal: especiePrincipal.name,
            };
          }

          resolve(newPerson);
        } catch (error) {
          reject(error);
        }
      });
    });
  };

  const getOnePerson = async (id: string) => {
    setLoading(true);
    const { data: personData }: { data: Person } = await Axios.get(
      `https://swapi.dev/api/people/${id}`
    ).finally(() => {
      setLoading(false);
    });

    let newPerson: Person = { ...personData, id, vehiclesName: [] };

    if (personData.species.length > 0) {
      const { data: especiePrincipal } = await Axios.get(personData.species[0]);

      newPerson = {
        ...newPerson,
        id: id,
        especiePrincipal: especiePrincipal.name,
      };
    }
    if (personData.vehicles.length > 0) {
      const newData: VehicleModel[] = await Promise.all(
        createPromiseVehicles(personData.vehicles)
      );
      newPerson.vehiclesName = newData.map((e: VehicleModel) => e.name);
    }

    return newPerson;
  };

  const createPromiseVehicles = (
    urls: string[]
  ): Array<Promise<VehicleModel>> => {
    return urls.map((e) => {
      return new Promise(async (resolve, reject) => {
        try {
          const { data } = await Axios.get(e);
          resolve(data);
        } catch (err) {
          reject(err);
        }
      });
    });
  };
  return {
    person,
    loading,
    getOnePerson,
  };
};
