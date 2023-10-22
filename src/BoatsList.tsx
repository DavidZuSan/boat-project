import React, { useState, useEffect } from "react";
import axios from "axios";

type Boat = {
  id: number;
  name: string;
};

function BoatsList() {
  const [boats, setBoats] = useState<Boat[]>([]);

  useEffect(() => {
    axios
      .get<Boat[]>("/api/boats")
      .then((response) => {
        setBoats(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos de los barcos:", error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Barcos</h2>
      <ul>
        {boats.map((boat) => (
          <li key={boat.id}>{boat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BoatsList;
