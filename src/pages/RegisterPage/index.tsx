import React, { useContext } from "react";
import { StyledRegisterPage } from "./styles";
import logo from "../../img/kenzieBurguer.svg";
import bag from "../../img/shoppingBag.svg";
import circulos from "../../img/circulos.svg";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { loadavg } from "os";

const Logo = logo;
const Bag = bag;
const Circulos = circulos;

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export function RegisterPage() {
  const { NewRegister, setLoading, loading } = useContext(UserContext);

  const navigate = useNavigate();
  function goLoginClick() {
    navigate("/");
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterFormData> = async (data) => {
    const information = { ...data };
    delete information.confirmPassword;
    await NewRegister(information, setLoading);
    reset();
  };

  return (
    <StyledRegisterPage>
      <section className="secApresentation">
        <img src={Logo} alt="imagem de Kenzie Burguer" />
        <div className="areaImageAndMessage hidden">
          <figure className="areaBag">
            <img src={Bag} alt="imagem de sacola verde" />
          </figure>
          <p className="reminder">
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <strong className="bests">melhores</strong> ingredientes.
          </p>
        </div>
        <figure>
          <img
            src={Circulos}
            alt="imagem de circulos de cor cinza"
            className="hidden"
          />
        </figure>
      </section>
      <section className="secRegister">
        <div className="areaRegisterAndGoToLogin">
          <h1 className="titleRegister">Cadastro</h1>
          <button className="btGoToLogin" onClick={goLoginClick}>
            Retornar para o login
          </button>
        </div>
        <form
          className="formRegister"
          onSubmit={handleSubmit(submit)}
          noValidate
        >
          <label htmlFor="name" className="lbRegister">
            Nome
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="iptRegister"
            {...register("name")}
          />
          {errors.name && <p className="areaError">{errors.name.message}</p>}
          <label htmlFor="email" className="lbRegister">
            Email
          </label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="iptRegister"
            {...register("email")}
          />
          {errors.email && <p className="areaError">{errors.email.message}</p>}
          <label htmlFor="password" className="lbRegister">
            Senha
          </label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="iptRegister"
            {...register("password")}
          />
          {errors.password && (
            <p className="areaError">{errors.password.message}</p>
          )}
          <label htmlFor="confirmPassword" className="lbRegister">
            Confirmar Senha
          </label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="iptRegister"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="areaError">{errors.confirmPassword.message}</p>
          )}
          <button type="submit" className="btRegister" disabled={loading}>
            {loading ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
      </section>
    </StyledRegisterPage>
  );
}
