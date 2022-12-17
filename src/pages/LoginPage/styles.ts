import styled from "styled-components";

export const StyledLoginPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.875rem;

  .secLogin {
    max-width: 31.25rem;
    width: 100%;
    height: 34.8125rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 0.25rem;
    border: 0.1125rem solid #f5f5f5;
    padding: 1.625rem 1.5rem;
    background-color: #ffffff;
  }

  .titleLogin {
    margin-bottom: 0.875rem;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #333333;
  }

  .formLogin {
    max-width: 28.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .lbLogin {
    margin-bottom: 0.3125rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: #999999;
  }

  .iptLogin {
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

  .iptLogin::placeholder {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .iptLogin:focus {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .iptLogin:hover {
    border: 0.1125rem solid #333333;
    border-radius: 0.5rem;
  }

  .btLogar {
    max-width: 28.25rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    margin-bottom: 1.1875rem;
    background-color: #219653;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }
  .btLogar:hover {
    background-color: #93d7af;
  }

  .messageCreateRegister {
    margin-left: 4.375rem;
    margin-bottom: 1.3125rem;
    max-width: 20.4375rem;
    width: 100%;
    height: 2.375rem;
    text-align: center;
    line-height: 1.125rem;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    color: #999999;
  }

  .btGoToRegister {
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

  .btGoToRegister:hover {
    background-color: #828282;
    color: #e0e0e0;
  }

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

  .areaError {
    color: #e60000;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
  }

  @media (max-width: 67.5rem) {
    margin-top: 3.3125rem;
    flex-direction: column-reverse;
    gap: 0rem;

    .secApresentation {
      height: 9.8125rem;
    }

    .secLogin {
      border: none;
    }

    .messageCreateRegister {
      margin-top: 0.875rem;
    }

    .areaImageAndMessage {
      height: 8.9375rem;
      max-width: 28.25rem;
      width: 100%;
    }

    .reminder {
      margin-bottom: 0.4rem;
    }

    .hidden {
      display: none;
    }

    
    @media (max-width: 28.125rem) {
      .messageCreateRegister{
        margin-left: 1rem;
    width: 89%;
      }
  }
`;
