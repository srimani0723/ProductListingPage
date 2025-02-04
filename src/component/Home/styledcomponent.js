import styled from "styled-components";

export const MainDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 50%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ProductsSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: aliceblue;
`;

export const Para = styled.p`
  padding: 0px;
  margin: 1rem;
`;

export const Heading = styled.h1`
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: large;
  }
`;

export const Button = styled.button`
  border: 0px;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  padding: 10px 0px;
  color: white;
  cursor: pointer;
  background-color: #24a0ed;
  box-shadow: 5px 5px 1px lightgray;
  &:hover {
    box-shadow: 0px 0px 1px 3px lightgray;
  }
`;

export const Image = styled.img`
  width: 50%;
  max-width: 500px;
  border-radius: 5px;
  display: ${(props) => props.d};
  @media (max-width: 576px) {
    display: ${(props) => props.ds};
    width: 100%;
    margin: 1rem;
  }
`;
