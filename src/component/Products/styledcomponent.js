import styled from "styled-components";

export const ProductsSection = styled.div`
  /* width: ${(props) => {
    return props.$w === "" ? "70%" : "100%";
  }}; */
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;

  /* @media (max-width: 576px) {
    width: ${(props) => {
    return props.$w === "" ? "100%" : "100%";
  }};
  }
  @media (min-width: 996px) {
    width: ${(props) => {
    return props.$w === "" ? "100%" : "100%";
  }};
  } */
`;

export const ProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  max-width: 1200px;
`;

export const UList = styled.ul`
  padding: 0px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

export const ProductsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  align-items: center;
  padding-bottom: 1rem;
  min-height: 70vh;
  @media (max-width: 576px) {
    min-height: 80vh;
  }
`;

export const PageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;
export const PageBtn = styled.button`
  border: 0px;
  border-radius: 5px;
  padding: 8px;
  color: white;
  cursor: pointer;
  background-color: #24a0ed;
  box-shadow: 3px 3px 1px lightgray;
  &:hover {
    scale: 1.2;
    transition: 0.5s;
    box-shadow: 0px 0px 1px 2px lightgray;
  }
`;

export const PageCount = styled.p`
  font-weight: bold;
  font-size: large;
  margin-left: 1rem;
  margin-right: 1rem;
`;
