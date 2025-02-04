import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 1rem 1rem 0rem 1rem;
  box-sizing: border-box;
  position: relative;
`;

export const NavDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  @media (max-width: 576px) {
    align-items: flex-start;
  }
  @media (min-width: 996px) {
    max-width: 1000px;
  }
`;

export const NavOptionsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 0rem;
    align-items: flex-start;
    display: ${(props) => {
      return props.$sd ? props.$sd : "flex";
    }};
  }
`;

export const Para = styled.p`
  padding: 5px;

  font-size: 1rem;
  font-weight: bold;
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;

  margin-right: 10px;
  background-color: ${(props) => props.$bg};
  border-radius: 5px;
  @media (max-width: 576px) {
    width: ${(props) => {
      return props.$sw ? props.$sw : "100%";
    }};
    margin-top: 5px;
  }
  &:hover {
    border-radius: 5px;
    background-color: rgb(231, 245, 253);
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.$w};
  justify-content: ${(props) => props.$justify};
`;

export const Button = styled.button`
  width: ${(props) => {
    return props.$w ? props.$w : "1.5rem";
  }};
  height: ${(props) => {
    return props.$h ? props.$h : "1.5rem";
  }};
  border: 0px;
  background: transparent;
  cursor: pointer;
  margin-right: ${(props) => {
    return props.$mr ? props.$mr : "1rem";
  }};

  @media (max-width: 576px) {
    width: ${(props) => {
      return props.$sw ? props.$sw : "1.2rem";
    }};
    height: ${(props) => {
      return props.$sh ? props.$sh : "1.2rem";
    }};
    margin-right: 5px;
    display: ${(props) => {
      return props.$d;
    }};
  }

  @media (min-width: 576px) {
    display: ${(props) => {
      return props.$db;
    }};
  }
`;

export const LogoutButton = styled.button`
  border: 0px;
  border-radius: 5px;
  padding: 5px;
  width: 80px;
  color: white;
  cursor: pointer;
  background-color: #24a0ed;
  @media (max-width: 576px) {
    width: 100%;
    margin-top: 5px;
  }

  box-shadow: 3px 3px 1px lightgray;
  &:hover {
    box-shadow: 0px 0px 1px 2px lightgray;
  }
`;

export const BagDiv = styled.div`
  display: flex;
  position: relative;
`;

export const BagCount = styled.p`
  padding: 0px 5px;
  margin: 0px;
  position: absolute;
  margin-left: 40%;
  margin-top: 20%;
  background-color: #24a0ed;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: small;
    padding: 0px 4px;
  }
`;
