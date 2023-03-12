import logo from "../images/tech/reactLogo.svg";
import "./App.css";
import { Container } from "react-bootstrap";

export function ErrorNotFound() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
      <Container className="d-flex justify-content-center">
        <h2>Oops... looks like that url doesn't work...</h2>
      </Container>
    </>
  );
}
