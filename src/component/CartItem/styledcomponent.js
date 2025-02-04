import styled from "styled-components";

export const Item = styled.li`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 125px;
  padding: 1rem 0px;
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 0px lightgrey;
`;

export const ItemImg = styled.img`
  width: 20%;
  max-width: 120px;
  max-height: 120px;
  margin: 0px 10px;
  @media (max-width: 576px) {
    width: 40%;
    max-height: 100%;
    margin-bottom: 10px;
  }
`;

export const ItemName = styled.p`
  font-size: medium;
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: small;
  }
`;
export const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: red;
  }
  width: 10%;
`;

export const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;

  @media (max-width: 576px) {
    text-align: center;
    flex-direction: column;
    box-sizing: border-box;
    width: 50%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 30%;
  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    width: 25%;
  }
`;

export const Price = styled.p`
  color: #24a0ed;
  font-size: large;
  font-weight: bold;
  width: 50%;
  @media (max-width: 576px) {
    width: 100%;
    font-size: small;
    margin: 10px 0px;
  }
`;

export const Quantity = styled.p`
  font-size: medium;
  font-weight: bold;

  text-align: center;
  @media (max-width: 576px) {
    font-size: small;
    padding: 5px;
    margin: 10px 0px;
  }
`;

export const QuantityDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  max-width: 7rem;
  @media (max-width: 576px) {
    height: 30px;
  }
`;

export const QuantityBtn = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: large;
  font-weight: bold;
  padding: 5px;
  min-width: 20px;
  border-radius: 100%;
  cursor: pointer;

  color: white;
  background-color: #24a0ed;

  box-shadow: 2px 4px 0px lightgray;
  &:hover {
    box-shadow: 0px 0px 1px 2px lightgray;
  }
  @media (max-width: 576px) {
    font-size: small;
    padding: 5px 0px;
  }
`;
