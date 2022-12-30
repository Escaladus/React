import React, { useReducer } from "react";
import AppReducer from "./AppReducer";
import UrheilijatiedotContext from "./UrheilijatiedotContext";
import { GET_URHEILIJATIEDOT } from "./types";
import axios from "axios";

const GlobalState = (props) => {
  let initialState = {
    urheilijatiedot: [],
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const getUrheilijatiedot = async () => {
    try {
      let res = await axios.get("http://localhost:3007/urheilijat");
      let { data } = res;
      dispatch({ type: GET_URHEILIJATIEDOT, payload: data });
    } catch (error) {
      console.error(error);
    }
  };
  const getUrheilijatieto = async (id) => {
    try {
      let sql = "http://localhost:3007/urheilijat/ " + id;
      let res = await axios.get(sql);
      dispatch({ type: "GET_URHEILIJATIETO", payload: res.data });
    } catch (error) {
      console.error(error);
    }
  };
  
  const setUrheilijatiedot = async (uusiUrheilijatieto) => {
    try {
      const res = await axios
        .post(`http://localhost:3007/lisaa`, uusiUrheilijatieto)
        .then((res) => {
          dispatch({ type: "ADD_URHEILIJATIETO", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const setUrheilijatieto = async (id, paivitettyUrheilijatieto) => {
    try {
      const res = await axios
        .put(`http://localhost:3007/urheilijat/${id}`, paivitettyUrheilijatieto)
        .then((res) => {
          dispatch({ type: "EDIT_URHEILIJATIETO", payload: res.data });
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const poistaUrheilijatieto = async (id) => {
    try {
      let sql = "http://localhost:3007/urheilijat/" + id["id"];

      const res = await axios.delete(sql).then((res) => {
        dispatch({ type: "DELETE_URHEILIJATIETO", payload: id["id"] });
        console.log(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <UrheilijatiedotContext.Provider
      value={{
        urheilijatiedot: state.urheilijatiedot,
        getUrheilijatiedot,
        setUrheilijatieto,
        setUrheilijatiedot,
        poistaUrheilijatieto,
        getUrheilijatieto,
      }}
    >
      {props.children}
    </UrheilijatiedotContext.Provider>
  );
};

export default GlobalState;
