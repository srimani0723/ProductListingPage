import styled from "styled-components";

export const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
`;

export const Button = styled.button`
  border: 0px;
  border-radius: 5px;
  width: 90%;
  max-width: 300px;
  padding: 10px 0px;
  color: white;
  cursor: pointer;
  margin: 1rem;
  background-color: #24a0ed;
  box-shadow: 3px 3px 1px lightgray;
  &:hover {
    box-shadow: 0px 0px 1px 2px lightgray;
  }
`;
