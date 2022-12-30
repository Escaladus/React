import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Ylatunniste = (props) => {
  const { turvataso } = props;

  return (
    <nav
      className="navbar navbar-light navbar sticky-top "
      style={{ backgroundColor: "lightblue" }}
    >
      <div className="container-fluid">
        <div>
          <ul className="nav nav-pills nav-justified">
            <li className="navbar-brand">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Alkuun
              </Link>
            </li>

            <li className="navbar-brand">
              <Link to="/urheilijatieto/lisaa" className="nav-link">
                Lisää urheilijatieto
              </Link>
            </li>

            <li className="navbar-brand">
              <Link to="/tietoa" className="nav-link">
                Tietoa
              </Link>
            </li>
          </ul>
        </div>
        <pre> tietoturvataso {turvataso} </pre>
      </div>
    </nav>
  );
};
Ylatunniste.defaultProps = {
  turvataso: "pieni",
};
Ylatunniste.propTypes = {
  turvataso: PropTypes.string.isRequired,
};
export default Ylatunniste;
