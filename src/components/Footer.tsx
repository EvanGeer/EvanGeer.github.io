import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import gitHubLogo from "../images/Github_black.png";
import linkInLogo from "../images/LinkedIN_black.png";
import mailIcon from "../images/Mail_ru_black.png";

export function Footer() {
  return (
    <>
      <Navbar
        bg="light"
        className="fixed-bottom justify-content-center"
      >
        <Container className="">
            <a className="footer" href="https://www.linkedin.com/in/evangeer/">
              <img width="20" className="p-0" src={linkInLogo} />
              linkedin.com/in/evangeer
            </a>
            <span className="text-dark">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <a className="footer" href="https://github.com/EvanGeer">
              <img width="20" className="m2" src={gitHubLogo} />
              github.com/EvanGeer
            </a>
            <span className="text-dark">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <a className="footer" href="mailto:automate@evangeer.com">
              <img width="20" className="m2" src={mailIcon} />
              automate@evangeer.com
            </a>
        </Container>
      </Navbar>
    </>
  );
}
