import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";

export default function LisaaUrheilijatieto() {
  let history = useNavigate();

  const [nimi, setNimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [paino, setPaino] = useState("");
  const [linkki, setLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");

  const UrheilijatiedotContext = useContext(urheilijatiedotContext); //hooks

  const handleSubmit = async (e) => {
    const uusiUrheilijatieto = {
      nimi: nimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      paino: paino,
      linkki: linkki,
      laji: laji,
      saavutukset: saavutukset,
      syntymavuosi: syntymavuosi,
    };
    console.log(uusiUrheilijatieto);
    UrheilijatiedotContext.setUrheilijatiedot(uusiUrheilijatieto);
    history("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Lisää urheilijan</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              id="nimitieto"
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={(event) => setNimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä nimi</div>
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Sukunimi</label>
            <input
              id="nimitieto"
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={(event) => setSukunimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä sukunimi</div>
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Kutsumanimi</label>
            <input
              id="nimitieto"
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={(event) => setKutsumanimi(event.target.value)}
            />
            <div className="invalid-feedback">Täytä kutsumanimi</div>
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Paino</label>
            <input
              id="nimitieto"
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
            />
            <div className="invalid-feedback">Aseta paino</div>
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Linkki kuvaan</label>
            <input
              id="nimitieto"
              type="text"
              name="linkki"
              className="form-control form-control-lg"
              placeholder="URL"
              value={linkki}
              onChange={(event) => setLinkki(event.target.value)}
            />
            <div className="invalid-feedback">syötä linkki</div>
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Laji</label>
            <input
              id="nimitieto"
              type="text"
              name="Laji"
              className="form-control form-control-lg"
              placeholder="Syötä Laji..."
              value={laji}
              onChange={(event) => setLaji(event.target.value)}
            />
            <div className="invalid-feedback">Täytä Laji</div>
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Saavutukset</label>
            <input
              id="nimitieto"
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>

          <div className="form-group">
            <label htmlFor="puhelin">Syntymävuosi (Esimerkiksi '1999')</label>
            <input
              id="syntymatieto"
              type="text"
              name="puhelin"
              className="form-control form-control-lg"
              placeholder="Syntymävuosi"
              value={syntymavuosi}
              onChange={(event) => setSyntymavuosi(event.target.value)}
            />
            <div className="invalid-feedback">Aseta syntymävuoden</div>
          </div>

          <input
            type="submit"
            value="Lisää urheilijan"
            className="btn btn-outline-warning"
            style={{ padding: 10, margin: 10 }}
          />
        </form>
      </div>
    </div>
  );
}
