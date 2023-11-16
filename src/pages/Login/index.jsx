import { useState } from "react";
import { Form, MensagemError, Section, Title } from "../../GlobalStyle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LoginForgot } from "./style";
import { data } from "../../mock/database";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [error, setError] = useState(false);

  async function submit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://127.0.0.1:5000/login", {
        email,
        senha,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Section>
      <Form onSubmit={submit}>
        <Title>Faça login</Title>
        <Input
          id={"email"}
          label={"Email"}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id={"senha"}
          label={"Senha"}
          type={"password"}
          onChange={(e) => setSenha(e.target.value)}
        />
        {error && <MensagemError>{error}</MensagemError>}
        <LoginForgot>Esqueceu a senha?</LoginForgot>
        <Button>Entrar</Button>
      </Form>
    </Section>
  );
};
