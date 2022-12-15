import React from "react";
import { StyledLoginPage } from "./styles";
import logo from "../../img/kenzieBurguer.svg";
import bag from "../../img/shoppingBag.svg";
import circulos from "../../img/circulos.svg";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from "./loginSchema";

const Logo = logo;
const Bag = bag;
const Circulos = circulos;

interface iLoginFormData {
  email: string;
  password: string;
}

export function LoginPage() {
  const navigate = useNavigate();
  function goRegisterClick() {
    navigate("/register");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginFormData> = async (data) => {
    console.log(data);
  };

  return (
    <StyledLoginPage>
      <section className="secLogin">
        <h1 className="titleLogin">Login</h1>
        <form className="formLogin" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="email" className="lbLogin">
            Email
          </label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="iptLogin"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}
          <label htmlFor="password" className="lbLogin">
            Senha
          </label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="iptLogin"
            {...register("password")}
          />
          {errors.password && (
            <p className="areaError">{errors.password.message}</p>
          )}
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
