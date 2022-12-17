import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.875rem;

  .secApresentation {
    max-width: 31.25rem;
    width: 100%;
    height: 34.8125rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1.625rem 1.5rem;
    background-color: #ffffff;
  }

  .areaImageAndMessage {
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    max-width: 23.5625rem;
    width: 100%;
    height: 5.9375rem;
    display: flex;
    padding: 1.0625rem 0rem 1.125rem 0.875rem;
    gap: 1.1875rem;
    background-color: #ffffff;
    border: 0.0625rem solid #e0e0e0;
    border-radius: 0.3125rem;
  }

  .areaBag {
    max-width: 3.75rem;
    width: 100%;
    height: 3.75rem;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 0.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reminder {
    max-width: 16.3125rem;
    width: 100%;
    height: 4.125rem;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: #828282;
  }

  .bests {
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: #333333;
  }

  .secRegister {
    max-width: 31.25rem;
    width: 100%;
    height: 32.9375rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.25rem;
    border: 0.1125rem solid #f5f5f5;
    padding: 1.75rem 1.5rem;
    background-color: #ffffff;
  }

  .areaRegisterAndGoToLogin {
    margin-top: 1.75rem;
    margin-bottom: 0.875rem;
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleRegister {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #333333;
  }

  .btGoToLogin {
    max-width: 8.75rem;
    width: 100%;
    height: 1.375rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: #828282;
    border-bottom: 0.1125rem solid #828282;
  }
  .btGoToLogin:hover {
    font-weight: 500;
    color: #333333;
    -webkit-tranform: scale(1.1);
    -webkit-transition: scale(1.1);
  }

  .formRegister {
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .lbRegister {
    margin-bottom: 0.3125rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: #999999;
  }

  .iptRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 4.375rem;
    margin-bottom: 0.9375rem;
    padding: 1.25rem 0.9375rem;
    margin-bottom: 0.3125rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    background-color: #f5f5f5;
    color: #333333;
    outline: none;
    border: 0.1125rem solid #e0e0e0;
    border-radius: 0.5rem;
  }

  .iiptRegister::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .iptRegister:focus {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }
  .iptRegister:hover {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .btRegister {
    max-width: 28.25rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #999999;
  }

  .btRegister:hover {
    background-color: #828282;
    color: #e0e0e0;
  }

  .areaError {
    color: #e60000;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
  }

  @media (max-width: 67.5rem) {
    flex-direction: column;
    gap: 0;

    .secApresentation {
      height: 6.8125rem;
    }

    .secRegister {
      border: none;
    }

    .reminder {
      margin-bottom: 0.3125rem;
    }

    .hidden {
      display: none;
    }
  }
`;
