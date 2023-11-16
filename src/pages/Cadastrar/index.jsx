import { useEffect, useState } from "react";
import { Form, MensagemError, Section, Title } from "../../GlobalStyle";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { CadastrarDiv } from "./style";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:5000";

export const Cadastrar = () => {
  const [usuario, setUsuario] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
  const [senhaIncompativel, setSenhaIncompativel] = useState(false);
  const [senhaFraca, setSenhaFraca] = useState(false);
  const [emailExiste, setEmailExiste] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (senha !== confirmarSenha) {
      setSenhaIncompativel(true);
    }

    if (!regex.test(senha)) {
      setSenhaFraca(true);
    }
    try {
      const { data } = await axios.post("http://127.0.0.1:5000/usuarios", {
        usuario,
        email,
        senha,
      });
      console.log(data);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    setSenhaIncompativel(false);
    setSenhaFraca(false);
  }, [senha]);

  return (
    <Section>
      <Form onSubmit={submit}>
        <Title>Cadastrar</Title>
        <CadastrarDiv>
          <Input
            id={"usuario"}
            label={"Usuário"}
            type={"text"}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <Input
            id={"email"}
            label={"Email"}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
        </CadastrarDiv>
        <CadastrarDiv>
          <Input
            id={"senha"}
            label={"Senha"}
            type={"password"}
            onChange={(e) => setSenha(e.target.value)}
          />{" "}
          {senhaFraca && <MensagemError>Senha fraca</MensagemError>}
          <Input
            id={"confirmarSenha"}
            label={"Confirmar Senha"}
            type={"password"}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </CadastrarDiv>
        {senhaIncompativel && (
          <MensagemError>Senhas incompativeis</MensagemError>
        )}
        <Button>Cadastrar</Button>
      </Form>
    </Section>
  );
};
