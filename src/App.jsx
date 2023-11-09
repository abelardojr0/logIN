import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar";
import { GlobalStyle } from "./GlobalStyle";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastrar" element={<Cadastrar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
