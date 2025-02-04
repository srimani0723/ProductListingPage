import styled from "styled-components";

export const MainDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const WishlistBox = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1rem;
  max-width: 1000px;
`;

export const Heading = styled.h1``;

export const WishlistListDiv = styled.ul`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
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
