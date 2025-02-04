import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  list-style: none;
  box-sizing: border-box;

  box-shadow: 0px 1px 5px 0px lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin: 5px;

  @media (max-width: 350px) {
    width: 100%;
  }
  @media (min-width: 350px) and (max-width: 576px) {
    width: 40%;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 35%;
  }
  @media (min-width: 768px) and (max-width: 996px) {
    width: 30%;
  }
  @media (min-width: 996px) {
    width: 20%;
  }
`;

export const Para = styled.p`
  margin-top: 10px;
  font-size: medium;
`;

export const Image = styled.img`
  align-self: center;
  margin: auto auto;
  max-height: 100px;
  max-width: 100px;
`;

export const Rating = styled.p`
  color: skyblue;
  margin-right: 1px;
  font-weight: bold;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
  margin-top: 5px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Cost = styled.p`
  font-weight: bold;
`;

export const Button = styled.button`
  border: 0px;
  border-radius: 5px;
  padding: 8px;
  color: white;
  cursor: pointer;
  background-color: #24a0ed;
  box-shadow: 3px 3px 1px lightgray;
  &:hover {
    box-shadow: 0px 0px 1px 2px lightgray;
  }
`;

export const Wishlist = styled.button`
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    scale: 1.2;
  }
`;
