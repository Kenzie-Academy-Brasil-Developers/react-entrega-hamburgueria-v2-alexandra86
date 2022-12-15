import React from "react";
import logo from "../../img/kenzieBurguer.svg";
import { useNavigate } from "react-router-dom";
import { Product } from "../../components/Product";
import { StyledHomePage } from "./styles";

const Logo = logo;

export function HomePage() {
  const navigate = useNavigate();
  function goLoginClick() {
    navigate("/");
  }

  return (
    <StyledHomePage>
      <header className="headerHome">
        <img src={Logo} alt="imagem de Kenzie Burguer" />
        <div className="areaDivHeader">
          <div className="areaDivForm">
            <form className="formHome">
              <input
                type="text"
                placeholder="Digitar Pesquisa"
                className="iptHome"
              />
              <button type="submit" className="btSearch"></button>
            </form>
          </div>
          <div className="areaButtons">
            <button type="button" className="btCar"></button>
            <button
              type="button"
              className="btLogout"
              onClick={goLoginClick}
            ></button>
          </div>
        </div>
      </header>
      <main className="mainHome">
        <ul className="ulProduct">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </main>
    </StyledHomePage>
  );
}
