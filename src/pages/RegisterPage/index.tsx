import React from "react";
import { StyledRegisterPage } from "./styles";
import logo from "../../img/kenzieBurguer.svg";
import bag from "../../img/shoppingBag.svg";
import circulos from "../../img/circulos.svg";
import { useNavigate } from "react-router-dom";

const Logo = logo;
const Bag = bag;
const Circulos = circulos;

export function RegisterPage() {
  const navigate = useNavigate();
  function goLoginClick() {
    navigate("/");
  }
  return (
    <StyledRegisterPage>
      <section className="secApresentation">
        <img src={logo} alt="imagem de Kenzie Burguer" />
        <div className="areaImageAndMessage">
          <figure className="areaBag">
            <img src={bag} alt="imagem de sacola verde" />
          </figure>
          <p className="reminder">
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong className="bests">melhores</strong> ingredientes.
          </p>
        </div>
        <figure>
          <img src={circulos} alt="imagem de circulos de cor cinza" />
        </figure>
      </section>
      <section className="secRegister">
        <div className="areaRegisterAndGoToLogin">
          <h1 className="titleRegister">Cadastro</h1>
          <button className="btGoToLogin" onClick={goLoginClick}>
            Retornar para o login
          </button>
        </div>
        <form className="formRegister">
          <label htmlFor="name" className="lbRegister">
            Nome
          </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            className="iptRegister"
          />
          <label htmlFor="email" className="lbRegister">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            className="iptRegister"
          />
          <label htmlFor="password" className="lbRegister">
            Senha
          </label>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            className="iptRegister"
          />
          <label htmlFor="password" className="lbRegister">
            Confirmar Senha
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            className="iptRegister"
          />
          <button type="submit" className="btRegister">
            Cadastrar
          </button>
        </form>
      </section>
    </StyledRegisterPage>
  );
}
