import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iLoginFormData } from "../../pages/LoginPage";
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
  NewLogin: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getUser: () => void;
  newLoading: boolean;
  setNewLoading: React.Dispatch<React.SetStateAction<boolean>>;
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

interface iDataToLogin {
  email: string;
  password: string;
}

export function UserProvider({ children }: iUserProviderProps) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<iResponseRegister | null>(null);
  const [newLoading, setNewLoading] = useState(true);
  const navigate = useNavigate();

  async function getUser() {
    const tokenValidate = localStorage.getItem("@TOKEN");

    if (!tokenValidate) {
      setNewLoading(false);
      return;
    }
    api.defaults.headers.common["Authorization"] = `Bearer ${tokenValidate}`;
    try {
      const response = await api.get("/products");
      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setNewLoading(false);
    }
  }
  useEffect(() => {
    getUser();
  }, []);
  async function NewLogin(
    data: iDataToLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    try {
      setLoading(true);
      const response = await api.post<iResponseRegister>("/login", data);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      setUser(response.data);
      toast.success("Login realizado com sucesso!");

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      toast.error("Login não realizado!");
    } finally {
      setLoading(false);
    }
  }

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
        NewLogin,
        setNewLoading,
        newLoading,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
