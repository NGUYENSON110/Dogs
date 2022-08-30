import React, { useEffect, useState } from "react";
import "./dogs.css";
import axios from "axios";

const Dogs = () => {
  const [dogs, getDogs] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      getDogs(res.data);
      console.log(dogs);
    };
    getData();
  }, []);
  return (
    <div>
      <section className="dogs-container">
        {dogs.map((listDogs) =>{
            return(
                <div>
                {listDogs.name}
            </div>
            )
           
        }) }
      </section>
    </div>
  );
};

export default Dogs;
