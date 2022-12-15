import React from "react";
import { StyledLoginPage } from "./styles";
import logo from "../../img/kenzieBurguer.svg";
import bag from "../../img/shoppingBag.svg";
import circulos from "../../img/circulos.svg";
import { useNavigate } from "react-router-dom";

const Logo = logo;
const Bag = bag;
const Circulos = circulos;

export function LoginPage() {
  const navigate = useNavigate();
  function goRegisterClick() {
    navigate("/register");
  }
  return (
    <StyledLoginPage>
      <section className="secLogin">
        <h1 className="titleLogin">Login</h1>
        <form className="formLogin">
          <label htmlFor="email" className="lbLogin">
            Nome
          </label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            className="iptLogin"
          />
          <label htmlFor="password" className="lbLogin">
            Senha
          </label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className="iptLogin"
          />
          <button type="submit" className="btLogar">
            Logar
          </button>
        </form>
        <p className="messageCreateRegister">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </p>
        <button className="btGoToRegister" onClick={goRegisterClick}>
          Cadastrar
        </button>
      </section>
      <section className="secApresentation">
        <img src={Logo} alt="imagem de Kenzie Burguer" />
        <div className="areaImageAndMessage">
          <figure className="areaBag">
            <img src={Bag} alt="imagem de sacola verde" />
          </figure>
          <p className="reminder">
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong className="bests">melhores</strong> ingredientes.
          </p>
        </div>
        <figure>
          <img src={Circulos} alt="imagem de circulos de cor cinza" />
        </figure>
      </section>
    </StyledLoginPage>
  );
}
