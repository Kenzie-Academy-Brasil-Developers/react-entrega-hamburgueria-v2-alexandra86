import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/axiosClient";

interface iCartContext {
  modalIsOpen: boolean;
  handleModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  products: iProducts[];
  searchProds: string;
  setSearchProds: React.Dispatch<React.SetStateAction<string>>;
  cartProdcts: iCartProducts[];
  addProductsCart: (element: iCartProducts) => void;
}

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iCartProducts {
  id: number;
  name: string;
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
  const [searchProds, setSearchProds] = useState("");
  const [cartProdcts, setCartProducts] = useState([] as iProducts[]);

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

  function addProductsCart(element: iCartProducts) {
    const getAddProducts = products.find((elem) => elem.id === element.id);
    const noRepeatAddProducts = cartProdcts.some(
      (elem) => elem.id === getAddProducts?.id
    );

    if (!noRepeatAddProducts) {
      setCartProducts((previuosCart: iProducts[] | any) => {
        return [...previuosCart, getAddProducts];
      });
      toast.success("Produto adicionado com sucesso!");
    } else {
      toast.error("Este produto já foi adicionado!");
    }
  }

  return (
    <CartContext.Provider
      value={{
        modalIsOpen,
        handleModal,
        setIsOpen,
        products,
        searchProds,
        setSearchProds,
        cartProdcts,
        addProductsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
