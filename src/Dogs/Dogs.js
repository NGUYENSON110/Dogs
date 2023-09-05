import React, { useEffect, useState } from "react";
import "./dogs.css";
import axios from "axios";
import DogsCard from "./DogsCard";

const Dogs = () => {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // const res = await axios.get("/v1/dogs");
      const res = await axios.get("https://dogs-be.vercel.app/v1/dogs");
      setDogs(res.data);
    };
    getData();
  }, []);

  return (
    <div>
      <section className="dogs-container">
        {dogs.map((listDog) => {
          return (
            <div key={listDog.id}>
              <DogsCard
                id={listDog.id}
                name={listDog.name}
                breed={listDog.breed}
                description={listDog.description}
                price={listDog.price}
                imageUrl= {listDog.imageUrl}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Dogs;
