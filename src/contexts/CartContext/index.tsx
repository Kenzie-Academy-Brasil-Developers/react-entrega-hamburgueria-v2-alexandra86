import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext";

interface iCartContext {
  modalIsOpen: boolean;
  handleModal: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<iCartContext>({} as iCartContext);

interface iCartProviderProps {
  children: React.ReactNode;
}

export function CartProvider({ children }: iCartProviderProps) {
  //   const {user, loading}= useContext(UserContext)
  //   const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleModal() {
    if (modalIsOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <CartContext.Provider value={{ modalIsOpen, handleModal, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}
