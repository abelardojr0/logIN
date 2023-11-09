import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardDiv = styled(Link)`
  background-color: #191b1c;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 200px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: scale(1.05);
  }
`;

export const CardText = styled.p`
  font-size: 80px;
  font-weight: bold;
  color: #f3feff;
`;
