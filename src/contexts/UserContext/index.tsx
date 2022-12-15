import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

interface iUserProviderProps {
  children: React.ReactNode;
}

export function UserProvider({ children }: iUserProviderProps) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [newLoading, setNewLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <UserContext.Provider
      value={{ loading, setLoading, user, setUser, newLoading, setNewLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}
