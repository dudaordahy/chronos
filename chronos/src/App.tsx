import { useState } from "react";
import { Heading } from "./components/heading";
import { Container } from "./components/container";
import { Menu } from "./components/menu";
import { CountDown } from "./components/countdown";
import { DefaultInput } from "./components/defaultInput";
import { Cycles } from "./components/cycles";
import { DefaultButton } from "./components/defaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/footer";


export function App() {

    const [numero, setNumero] = useState(0);
    function handleClick() {
      setNumero((numeroAtual) => numeroAtual + 1);
    }
  return (
    <>
    <Heading>
      Contar ciclos: {numero}
      <button onClick={handleClick}>
       Contar +1
       </button>
    </Heading>

      <Heading>LOGO</Heading>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
        <form action="" className="form">
          <div className="formRow">
          <DefaultInput
            labelText="Task"
            id="myInput"
            type="text"
            placeholder="Enter your task"
            required
          />
          </div>

          <div className="formRow">
            <Cycles/>
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>

          <DefaultButton
            icon={<PlayCircleIcon />}
          />
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}