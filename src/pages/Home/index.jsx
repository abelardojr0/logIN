import { Card } from "../../components/Card";
import { HomeCardsContainer } from "./style";

export const Home = () => {
  return (
    <HomeCardsContainer>
      <Card caminho={"/login"}>Login</Card>
      <Card caminho={"/cadastrar"}>Cadastrar</Card>
    </HomeCardsContainer>
  );
};
