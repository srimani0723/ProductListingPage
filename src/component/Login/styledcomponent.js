import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ImageDiv = styled.div`
  width: 40%;
  max-width: 500px;
  @media (max-width: 576px) {
    width: 60%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => (props.flex ? props.flex : "column")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 3px 5px 10px 0px lightgray;
  max-width: 400px;
  @media (max-width: 576px) {
    width: 70%;
  }
  @media (min-width: 576px) {
    width: 35%;
  }
`;

export const Label = styled.label`
  font-size: large;
  margin: 10px 5px;
  @media (max-width: 576px) {
    font-size: medium;
    margin: 7px 5px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: large;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: 0px;
  border: 4px solid rgb(36, 160, 237, 0.3);
  background-color: white;

  @media (max-width: 576px) {
    font-size: medium;
    padding: 5px;
  }
`;

export const Button = styled.button`
  align-self: center;
  padding: 10px;
  border-radius: 5px;
  border: 0px;
  font-size: large;
  cursor: pointer;
  outline: none;
  width: 100px;
  color: white;
  font-weight: 500;
  background-color: rgb(36, 160, 237);
  @media (max-width: 576px) {
    width: 100%;
    font-size: medium;
  }

  margin-bottom: 0px;
  box-shadow: 5px 5px 1px lightgray;
  &:hover {
    box-shadow: 0px 0px 1px 3px lightgray;
  }
`;

export const Para = styled.p`
  color: #d40202;
  font-weight: 500;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: x-large;
  font-family: "Roboto";
  margin-bottom: 1rem;
  @media (max-width: 576px) {
    font-size: large;
  }
`;
