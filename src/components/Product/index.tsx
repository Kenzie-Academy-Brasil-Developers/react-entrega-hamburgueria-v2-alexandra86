import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { StyleProduct } from "./styles";

interface iElemPropos {
  elem: {
    id: number;
    img: string;
    name: string;
    category: string;
    price: number;
  };
}

export function Product({ elem }: iElemPropos) {
  const { addProductsCart } = useContext(CartContext);
  return (
    <StyleProduct>
      <li key={elem.id}>
        <img src={elem.img} alt={elem.name} className="imgProduct" />
        <div className="areaDivProduct">
          <h2 className="titleProduct">{elem.name}</h2>
          <span className="categoryProduct">{elem.category}</span>
          <p className="priceProduct">
            {elem.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            type="button"
            className="btAddProduct"
            onClick={() => addProductsCart(elem)}
          >
            Adicionar
          </button>
        </div>
      </li>
    </StyleProduct>
  );
}
