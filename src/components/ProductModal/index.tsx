import { useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";
import "../../components/ProductModal/styles.css";
import hamburguer from "../../img/hamburguer.svg";
Modal.setAppElement("#root");

const Hamburguer = hamburguer;

export function ProductModal() {
  const { modalIsOpen, handleModal, cartProdcts } = useContext(CartContext);

  return (
    <div className="container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="headerModal">
          <h2 className="titleModal">Carrinho de compras</h2>
          <button className="btCloseModal" onClick={() => handleModal()}>
            X
          </button>
        </div>
        {cartProdcts.length === 0 && (
          <div className="areaEmptyBag">
            <p className="messageEmptyBag">Sua Sacola está vazia</p>
            <span className="addItens">Adicione itens</span>
          </div>
        )}
        <ul className="ulProductModal">
          {cartProdcts?.map((elem) => (
            <li className="liProductModal" key={elem.id}>
              <div className="areaDivContention">
                <figure className="areaImageLiModal">
                  <img
                    src={elem.img}
                    alt={elem.name}
                    className="imageLiModal"
                  />
                </figure>
                <div className="areaDescriptionProduct">
                  <p className="titleProductModal">{elem.name}</p>
                  <div className="areaButtonsProductModal">
                    <button className="btMoreOrLess">-</button>
                    <span className="quantityProductModal">1</span>
                    <button className="btMoreOrLess">+</button>
                  </div>
                </div>
              </div>
              <button className="btTrash"></button>
            </li>
          ))}
        </ul>
        {cartProdcts.length !== 0 && (
          <div>
            <div className="areaPriceProductModal">
              <p className="total">Total</p>
              <span className="priceTotal">
                {" "}
                R${" "}
                {cartProdcts
                  ?.reduce((acc, act) => acc + act.price, 0)
                  .toFixed(2)}
              </span>
            </div>
            <button className="btRemoveAll">Remover Todos</button>
          </div>
        )}
      </Modal>
    </div>
  );
}
