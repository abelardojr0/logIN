import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuNav = styled.nav`
  background-color: #121a35;
  width: 100%;
  padding: 50px;
`;

export const MenuLista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: #f3feff;
  font-size: 48px;
  font-weight: bold;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const MenuLogo = styled.img`
  max-width: 150px;
  position: absolute;
  top: 5px;
`;
