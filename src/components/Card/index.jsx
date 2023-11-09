import { CardDiv, CardText } from "./style";

export const Card = ({ children, caminho }) => {
  return (
    <CardDiv to={caminho}>
      <CardText>{children}</CardText>
    </CardDiv>
  );
};
