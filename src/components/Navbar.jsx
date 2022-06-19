import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style/Navbar.css";

function Navbar() {
  const router = useNavigate();
  let location = useLocation();

  let loveCats = ["love-cats__btn"];
  let allCats = ["all-cats__btn"];

  switch (location.pathname) {
    case "/":
      allCats = ["all-cats__btn", "active__btn"];
      loveCats = ["love-cats__btn"];
      break;
    case "/favorite":
      allCats = ["all-cats__btn"];
      loveCats = ["love-cats__btn", "active__btn"];
      break;

    default:
      break;
  }

  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <button onClick={() => router("/")} className={allCats.join(" ")}>
          Все котики
        </button>
        <button
          onClick={() => router("/favorite")}
          className={loveCats.join(" ")}
        >
          Любимые котики
        </button>
      </div>
    </div>
  );
}

export default Navbar;
