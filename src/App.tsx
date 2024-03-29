import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RegisterPage } from "./pages/RegisterPage";
import { RoutesProtected } from "./route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<RoutesProtected />}>
          <Route
            path="/home"
            element={
              <CartProvider>
                <HomePage />
              </CartProvider>
            }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
