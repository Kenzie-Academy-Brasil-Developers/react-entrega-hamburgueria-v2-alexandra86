import { StyleProduct } from "./styles";
import hamburguer from "../../img/hamburguer.svg";

const Hamburguer = hamburguer;

export function Product() {
  return (
    <StyleProduct>
      <li>
        <img
          src={Hamburguer}
          alt="imagem de hamburguer"
          className="imgProduct"
        />
        <div className="areaDivProduct">
          <h2 className="titleProduct">Hamburguer</h2>
          <span className="categoryProduct">Sanduíches</span>
          <p className="priceProduct">R$ 14,00</p>
          <button type="button" className="btAddProduct">
            Adicionar
          </button>
        </div>
      </li>
    </StyleProduct>
  );
}
