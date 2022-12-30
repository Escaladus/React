import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";
import { useNavigate } from "react-router-dom";

const Urheilijatieto = (props) => {
  const UrheilijatiedotContext = useContext(urheilijatiedotContext);
  let history = useNavigate();
  const [naytaUrheilijatieto, setnaytaUrheilijatieto] = useState(false);

  const onDeleteClick = (id) => {
    UrheilijatiedotContext.poistaUrheilijatieto(id);
    window.location.reload();
    history("/");
  };
  const onShowClick = (e) => {
    let lippu = !naytaUrheilijatieto;
    setnaytaUrheilijatieto(lippu);
  };
  const {
    id,
    nimi,
    sukunimi,
    kutsumanimi,
    paino,
    linkki,
    laji,
    saavutukset,
    syntymavuosi,
  } = props.urheilijatieto;
/*
  let SEKUNNIT = Date.parse(syntymavuosi);
  let VUOSI = new Date(SEKUNNIT);
  let VUOSISTR = VUOSI.getFullYear();
*/
  return (
    <div
      className="card card-body mb-2"
      style={{ backgroundColor: "GhostWhite"}}
    >
      <h4>
        {nimi} {sukunimi}
      </h4>
      <div style={{ textAlign: "center" }}>
        <button
          className="btn btn-outline-secondary"
          style={{ padding: 3, margin: 3 }}
          onClick={onShowClick.bind(this)}
        >
          <img src={linkki} style={{ width: 120 }} />
        </button>
      </div>

      <div className="text-right">
        <div className="btn-group mr-2" role="group" aria-label="Second group">
          <button
            type="button"
            style={{ padding: 10, margin: 10 }}
            className="btn btn-outline-danger"
            onClick={onDeleteClick.bind(this, { id })}
          >
            Poista
          </button>
          <Link to={`urheilijatieto/muokkaa/${id}`}>
            <button
              className="btn btn-outline-secondary"
              style={{ padding: 10, margin: 10 }}
            >
              Muokkaa
            </button>
          </Link>
        </div>
      </div>
      {naytaUrheilijatieto ? (
        <ul className="list-group">
          <li className="list-group-item">Nimi: {nimi}</li>
          <li className="list-group-item">Sukunimi: {sukunimi}</li>
          <li className="list-group-item">Kutsumanimi: {kutsumanimi}</li>
          <li className="list-group-item">Paino: {paino}</li>
          <li className="list-group-item">Laji: {laji}</li>
          <li className="list-group-item">Saavutukset: {saavutukset}</li>
          <li className="list-group-item">Syntymavuosi:{syntymavuosi} </li>
          <li className="list-group-item">
            <img src={linkki} style={{ width: 300 }} />
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Urheilijatieto;
