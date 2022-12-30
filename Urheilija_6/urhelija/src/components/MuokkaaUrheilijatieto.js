import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";

const MuokkaaUrheilijatieto = () => {
  const [nimi, setNimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [paino, setPaino] = useState("");
  const [linkki, setLinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const UrheilijatiedotContext = useContext(urheilijatiedotContext); //hooks
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    console.log("Urheilijatiedot");
    axios.get(`http://localhost:3007/urheilijat/${id}`).then((res) => {
      const urheiljatiedot = res.data;
      setNimi(urheiljatiedot.nimi);
      setSukunimi(urheiljatiedot.sukunimi);
      setKutsumanimi(urheiljatiedot.kutsumanimi);
      setPaino(urheiljatiedot.paino);
      setLinkki(urheiljatiedot.linkki);
      setLaji(urheiljatiedot.laji);
      setSaavutukset(urheiljatiedot.saavutukset);
      setSyntymavuosi(urheiljatiedot.syntymavuosi);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    const paivitettyUrheilijatieto = {
      nimi: nimi,
      sukunimi: sukunimi,
      kutsumanimi: kutsumanimi,
      paino: paino,
      linkki: linkki,
      laji: laji,
      saavutukset: saavutukset,
      syntymavuosi: syntymavuosi,
    };

    UrheilijatiedotContext.setUrheilijatieto(id, paivitettyUrheilijatieto);
    history("/");
  };
  /*
  let vuosi = new Date();
  vuosi = syntymavuosi.toString();
  let asetus = vuosi.slice(0, 10);
*/
  const onChangeNimi = (e) => {
    setNimi(e.target.value);
  };
  const onChangeSukunimi = (e) => {
    setSukunimi(e.target.value);
  };
  const onChangeKutsunimi = (e) => {
    setKutsumanimi(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeLinkki = (e) => {
    setLinkki(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa urheilijatietoja</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={onChangeNimi}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Sukunimi</label>
            <input
              type="text"
              name="sukunimi"
              className="form-control form-control-lg"
              placeholder="Syötä sukunimi..."
              value={sukunimi}
              onChange={onChangeSukunimi}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Kutsumanimi</label>
            <input
              type="text"
              name="kutsumanimi"
              className="form-control form-control-lg"
              placeholder="Syötä kutsumanimi..."
              value={kutsumanimi}
              onChange={onChangeKutsunimi}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Paino</label>
            <input
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Linkki kuvaan</label>
            <input
              type="text"
              name="linkki"
              className="form-control form-control-lg"
              placeholder="Syötä linkin..."
              value={linkki}
              onChange={onChangeLinkki}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Laji</label>
            <input
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji...."
              value={laji}
              onChange={onChangeLaji}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nimi">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nimi">
              Syntymäpäivä vvvv (Esimerkiksi "1999")
            </label>
            <input
              type="text"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syntymavuosi..."
              value={syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />
          </div>

          <input
            type="submit"
            value="Muokkaa urheilijatieto"
            className="btn btn-outline-warning"
            style={{ padding: 10, margin: 10 }}
          />
        </form>
      </div>
    </div>
  );
};

export default MuokkaaUrheilijatieto; //
