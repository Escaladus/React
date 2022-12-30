import React, { useContext, useEffect } from "react";
import Urheilijatieto from "./Urheilijatieto";
import urheilijatiedotContext from "../context/UrheilijatiedotContext";

const Urheilijatiedot = () => {
  const UrheilijatiedotContext = useContext(urheilijatiedotContext); //hooks
  console.log(UrheilijatiedotContext);

  useEffect(() => {
    UrheilijatiedotContext.getUrheilijatiedot(); // Haetaan urheilijatiedot
    console.log(UrheilijatiedotContext);
  }, []);
  return (
    <>
      <h1 className="display-4 mb-3">
        <span className="">Urheilijat</span>
      </h1>
      <React.Fragment>
        {UrheilijatiedotContext.urheilijatiedot.length
          ? UrheilijatiedotContext.urheilijatiedot.map((urheilijatieto) => (
              <Urheilijatieto
                key={urheilijatieto.id}
                urheilijatieto={urheilijatieto}
              />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default Urheilijatiedot;
