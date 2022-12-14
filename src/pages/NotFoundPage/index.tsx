import { StyledNotFound } from "./styles";
import { useNavigate } from "react-router-dom";
import sadEmotion from "../../img/fundo.jpg";

const SadEmotion = sadEmotion;

export function NotFoundPage() {
  const navigate = useNavigate();
  function goLoginClick() {
    navigate("/");
  }
  return (
    <StyledNotFound>
      <button onClick={goLoginClick} className="btComeBack">
        Voltar
      </button>
      <img
        src={sadEmotion}
        alt="imagem de página não encontrada"
        className="imgError"
      />
    </StyledNotFound>
  );
}
