import React, { useContext } from "react";
import logo from "../../img/kenzieBurguer.svg";
import { useNavigate } from "react-router-dom";
import { Product } from "../../components/Product";
import { StyledHomePage } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { ProductModal } from "../../components/ProductModal";

const Logo = logo;

export function HomePage() {
  const { modalIsOpen, handleModal, products, searchProds, setSearchProds } =
    useContext(CartContext);

  const navigate = useNavigate();
  function goLoginClick() {
    navigate("/");
    localStorage.removeItem("@TOKEN");
  }

  const showProducts = !searchProds
    ? products
    : products.filter(
        (element) =>
          element.name
            .toLowerCase()
            .includes(searchProds.toLocaleLowerCase()) ||
          element.category
            .toLowerCase()
            .includes(searchProds.toLocaleLowerCase())
      );

  return (
    <StyledHomePage>
      <header className="headerHome">
        <img src={Logo} alt="imagem de Kenzie Burguer" />
        <div className="areaDivHeader">
          <div className="areaDivForm">
            <form className="formHome">
              <input
                value={searchProds}
                onChange={(event) => setSearchProds(event.target.value)}
                type="text"
                placeholder="Digitar Pesquisa"
                className="iptHome"
              />
              <button type="submit" className="btSearch"></button>
            </form>
          </div>
          <div className="areaButtons">
            <button
              type="button"
              className="btCar"
              onClick={() => handleModal()}
            ></button>
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
          {showProducts?.map((elem) => (
            <Product key={elem.id} elem={elem} />
          ))}
        </ul>
      </main>
      {modalIsOpen && <ProductModal />}
    </StyledHomePage>
  );
}
