import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iRegisterFormData } from "../../pages/RegisterPage";
import { api } from "../../services/axiosClient";

interface iResponseRegister {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface iUserContext {
  user: iResponseRegister | null;
  setUser: React.Dispatch<React.SetStateAction<iResponseRegister | null>>;
  NewRegister: (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as iUserContext);

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iDataToRegister {
  name: string;
  email: string;
  password: string;
}

export function UserProvider({ children }: iUserProviderProps) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iResponseRegister | null>(null);
  // const [newLoading, setNewLoading] = useState(true);
  const navigate = useNavigate();

  async function NewRegister(
    data: iDataToRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoading(true);
      await api.post<iResponseRegister>("/users", data);
      toast.success("Cadastro relizado com sucesso!");
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Usuário já cadastrado!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        NewRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
