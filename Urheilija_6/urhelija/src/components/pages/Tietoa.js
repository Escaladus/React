import React from "react";
export default function Tietoa() {
  const link =
    "https://upload.wikimedia.org/wikipedia/fi/6/67/Lentopallon_Mestaruusliiga_logo.png";
  return (
    <div>
      <h1 className="display-4">Tietoa Urheilijoista</h1>
      <p className="lead">
        Urheilijatieto -sovelluksen avulla voit tutustua urheiloiden perus
        tietoihin.
       
      </p>
      <p className="text-secondary">Versio 1.0.0</p>
      <img className="rounded mx-auto d-block" src={link}></img>
    </div>
  );
}
