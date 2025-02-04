import styled from "styled-components";

export const MainDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  @media (min-width: 576px) {
    margin: auto;
    margin-top: 1rem;
  }
`;

export const CPara = styled.p`
  padding: 0px;
`;

export const CHeading = styled.h1`
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: large;
  }
`;

export const TopInfo = styled.div`
  width: 70%;
  max-width: 500px;
  padding: 2rem;
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

export const ProductSubDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AlignDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export const SideFilterBarDiv = styled.div`
  width: 30%;
  min-height: 100%;
  background-color: lightgray;
  @media (max-width: 768px) {
    position: absolute;
    width: 45%;
    z-index: 10;
    border-radius: 0px 10px 10px 0px;
  }
  @media (min-width: 768px) and (max-width: 996px) {
    width: 30%;
    position: absolute;
    z-index: 10;
    border-radius: 0px 10px 10px 0px;
  }
  @media (min-width: 996px) {
    width: 20%;
  }
  display: ${(props) => props.$d};
`;

export const FilterDiv = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
`;

export const FilterSubDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const TotalItems = styled.p`
  font-size: medium;
  font-weight: bold;

  margin-right: 1rem;
  @media (max-width: 576px) {
    font-size: small;
  }
`;

export const SortOptions = styled.select`
  font-size: small;
  font-weight: bold;
  background-color: transparent;
  border: 0px;
`;

export const SortOption = styled.option`
  color: gray;
  font-size: small;
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: small;
  }
`;
export const FilterToggleBtn = styled.button`
  background-color: transparent;
  border: 0px;
  color: gray;
  font-weight: 550;
  cursor: pointer;
  @media (max-width: 576px) {
    font-size: small;
  }
`;
