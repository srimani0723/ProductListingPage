import styled from "styled-components";

export const MainDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const FailureDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 500px;
`;
export const Heading = styled.h1`
  font-size: large;
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
