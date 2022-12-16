import styled from "styled-components";
import lupa from "../../img/lupa.svg";
import carrinho from "../../img/carrinho.svg";
import btLogout from "../../img/btLogout.svg";

export const StyledHomePage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;

  .headerHome {
    max-width: 100rem;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.625rem 5.5625rem;
    background-color: #f5f5f5;
  }
  .areaDivHeader {
    max-width: 460px;
    width: 100%;
    display: flex;
  }

  .areaDivForm {
    max-width: 22.8125rem;
    width: 100%;
    height: 3.75rem;
    padding: 0rem, 0.625rem;
    display: flex;
    align-items: center;
    border: 0.1125rem solid #e0e0e0;
    border-radius: 0.5rem;
    background-color: #ffffff;
  }

  .areaDivForm:hover {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .formHome {
    max-width: 22.8125rem;
    width: 100%;
    height: 3.75rem;
    padding: 0.625rem 0.9375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .iptHome {
    border: none;
    outline: none;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #333333;
  }

  .iptHome::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #e0e0e0;
  }
  .areaButtons {
    margin-left: 1.4375rem;
    max-width: 5.375rem;
    width: 100%;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6875rem;
  }

  .btSearch {
    max-width: 3.3125rem;
    width: 100%;
    height: 2.5rem;
    background-image: url(${lupa});
  }

  .btSearch:hover {
    background-size: 2.7rem;
    background-repeat: no-repeat;
  }

  .btCar {
    max-width: 1.5625rem;
    width: 100%;
    height: 1.5625rem;
    background-image: url(${carrinho});
    background-repeat: no-repeat;
  }

  .btCar:hover {
    background-size: 1.75rem;
  }

  .btLogout {
    max-width: 1.75rem;
    width: 100%;
    height: 1.5625rem;
    background-image: url(${btLogout});
    background-repeat: no-repeat;
  }

  .btLogout:hover {
    background-size: 1.875rem;
  }

  .mainHome {
    max-width: 100rem;
    width: 100%;
    padding: 0.625rem 5.5625rem;
  }

  .ulProduct {
    width: 100%;
    background-color: #ffffff;
    list-style: none;
    padding: 0rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.875rem;
  }
`;
