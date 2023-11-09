import { useState } from "react";
import { Form, MensagemError, Section, Title } from "../../GlobalStyle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { LoginForgot } from "./style";
import { data } from "../../mock/database";

export const Login = () => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [error, setError] = useState(false);

  function submit(e) {
    e.preventDefault();
    const validarEmail = data.some((element) => element.email === email);
    const validarSenha = data.some((element) => element.senha === senha);

    if (validarEmail && validarSenha) {
      alert("Logado com sucesso");
    } else {
      setError(true);
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
        {error && <MensagemError>Email ou senha incorretos</MensagemError>}
        <LoginForgot>Esqueceu a senha?</LoginForgot>
        <Button>Entrar</Button>
      </Form>
    </Section>
  );
};
