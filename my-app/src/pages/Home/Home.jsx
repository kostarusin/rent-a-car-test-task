import style from "./Home.module.css";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.background}>
      <h1>Rent a car</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/favorite">Favorite</Link>
      </nav>
    </div>
  );
};

export default Home;
