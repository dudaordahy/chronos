import { Container } from "./components/container";
import { Menu } from "./components/menu";
import { CountDown } from "./components/countdown";

export function App() {
  return (
    <>
      <Container>
        <section>LOGO</section>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </>
  );
}