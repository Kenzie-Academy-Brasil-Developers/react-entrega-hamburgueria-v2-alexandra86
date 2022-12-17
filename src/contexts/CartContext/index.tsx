import { createContext, useEffect, useState } from "react";
import { api } from "../../services/axiosClient";

interface iCartContext {
  modalIsOpen: boolean;
  handleModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: iProducts[];
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

interface iCartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: iCartProviderProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([] as iProducts[]);

  useEffect(() => {
    async function getProducts() {
      const tokenValidate = localStorage.getItem("@TOKEN");
      if (tokenValidate) {
        try {
          api.defaults.headers.authorization = `Bearer ${tokenValidate}`;
          const { data } = await api.get("/products");
          setProducts(data);
        } catch (error) {
          console.log(error);
        } finally {
        }
      }
    }
    getProducts();
  }, []);

  function handleModal() {
    if (modalIsOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <CartContext.Provider
      value={{ modalIsOpen, handleModal, setIsOpen, products }}
    >
      {children}
    </CartContext.Provider>
  );
}
