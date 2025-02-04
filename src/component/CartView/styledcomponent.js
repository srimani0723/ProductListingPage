import styled from "styled-components";

export const MainDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const CartMainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
`;

export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px 20px;
  width: 90%;
  @media (min-width: 996px) {
    max-width: 1024px;
    width: 90%;
  }
`;

export const ItemsContainer = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
`;

export const EmptyDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;

  box-sizing: border-box;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;
export const Heading = styled.h1`
  font-size: large;
`;

export const CartHeading = styled.h1`
  align-self: self-start;
  font-size: x-large;
  @media (max-width: 576px) {
    font-size: large;
  }
`;

export const Para = styled.p`
  margin: 1rem;
`;

export const Button = styled.button`
  border: 0px;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  padding: 10px 0px;
  color: white;
  cursor: pointer;
  margin: 1rem 0rem;
  background-color: #24a0ed;
  box-shadow: 5px 5px 1px lightgray;
  &:hover {
    box-shadow: 0px 0px 1px 2px lightgray;
  }
`;

export const RemoveBtn = styled.button`
  color: #24a0ed;
  font-size: medium;
  font-weight: bold;
  background-color: transparent;
  border: none;

  align-self: flex-end;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const TotalBox = styled.div`
  align-self: flex-end;
`;

export const TotalPara = styled.p`
  opacity: 0.7;
`;

export const Span = styled.span`
  opacity: 0.5;
`;
