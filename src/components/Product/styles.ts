import styled from "styled-components";

export const StyleProduct = styled.li`
  list-style-type: none;
  max-width: 18.75rem;
  width: 100%;
  height: 21.625rem;
  border: 0.125rem solid #e0e0e0;
  border-radius: 0.3125rem;
  display: flex;
  padding-bottom: 23px;

  .imgProduct {
    padding: 15.12px 71px 0px 52px;
    width: 18.4375rem;
    height: 10.75rem;
    background: #f5f5f5;
    margin-bottom: 0.125rem;
    object-fit: contain;
  }

  .areaDivProduct {
    max-width: 16.375rem;
    width: 100%;
    height: 10.1875rem;
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
  .titleProduct {
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #333333;
  }
  .categoryProduct {
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    color: #828282;
  }
  .priceProduct {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #27ae60;
  }

  .btAddProduct {
    width: 6.625rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: #bdbdbd;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    border: 0.125rem solid #bdbdbd;
    cursor: pointer;
  }
  &:hover {
    border: 0.125rem solid #27ae60;
  }

  .btAddProduct:hover {
    cursor: pointer;
    border: 0.125rem solid #27ae60;
    color: #ffffff;
    background-color: #27ae60;
  }
`;
