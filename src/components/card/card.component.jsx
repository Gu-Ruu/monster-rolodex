// import { Component } from "react";
import "./card.style.css";

const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`Monsters ${name}`}
        src={`https://robohash.org/${id}?set=set2`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
