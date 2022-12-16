import { useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";
import "../../components/ProductModal/styles.css";
import hamburguer from "../../img/hamburguer.svg";
Modal.setAppElement("#root");

const Hamburguer = hamburguer;

export function ProductModal() {
  const { modalIsOpen, handleModal } = useContext(CartContext);

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
        <ul className="ulProductModal">
          <li className="liProductModal">
            <div className="areaDivContention">
              <figure className="areaImageLiModal">
                <img
                  src={Hamburguer}
                  alt="imagem de hamburguer"
                  className="imageLiModal"
                />
              </figure>
              <div className="areaDescriptionProduct">
                <p className="titleProductModal">Hamburguer</p>
                <div className="areaButtonsProductModal">
                  <button className="btMoreOrLess">-</button>
                  <span className="quantityProductModal">1</span>
                  <button className="btMoreOrLess">+</button>
                </div>
              </div>
            </div>
            <button className="btTrash"></button>
          </li>
        </ul>
        <div className="areaPriceProductModal">
          <p className="total">Total</p>
          <span className="priceTotal">R$ 14,00</span>
        </div>
        <button className="btRemoveAll">Remover Todos</button>
        {/* <div className="areaEmptyBag">
          <p className="messageEmptyBag">Sua Sacola está vazia</p>
          <span className="addItens">Adicione itens</span>
        </div> */}
      </Modal>
    </div>
  );
}
