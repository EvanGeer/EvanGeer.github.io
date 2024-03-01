import { Button } from "react-bootstrap";
import {
  Github, Linkedin, Medium,
  StackOverflow
} from "react-bootstrap-icons";
import LinkedinLogo from "../../images/LinkedIn_icon_circle.svg";
import Stack from "../../images/StackOverflow.png";

export function Socials() {
  return <div
    className="h3 d-flex p-3 overflow-none  w-100 align-self-top mb-auto align-items-center"
    style={{ position: "absolute" }}
  >
    <div className="bg-light d-flex rounded-5 text-dark w-100 align-self-top mb-auto align-items-center bg-opacity-25">
      <div className="d-flex text-dark w-100 align-items-center">
        <img
          src="https://avatars.githubusercontent.com/u/49009980?v=4"
          height={40}
          className="rounded-circle m-1" />
        <span className="text-light display-6 ps-5 ms-1 pb-1 position-absolute">
          Evan Geer
        </span>
      </div>
      <div className="d-flex m-0 p-0 h4 pe-1 text-light align-items-center">
        <span className="opacity-50 me-2 d-none d-sm-flex">contact:</span>

        <Button
          href="https://linkedin.com/in/EvanGeer"
          target="new"
          className="p-0 m-1 d-flex rounded-circle"
          style={{ height: 34, width: 34 }}
          variant="dark"
        >
          {/* <img src={LinkedinLogo} height={25} className="m-auto" /> */}
          {/* <Linkedin className="m-1 rounded-circle bg-dark" color="white" size={24} /> */}
          <Linkedin className="rounded-1 m-auto" size={22} />
        </Button>
        <Button
          href="https://github.com/EvanGeer"
          target="new"
          className="p-0 m-1 d-flex rounded-circle"
          variant="dark"
          style={{ height: 34, width: 34 }}
        >
          <Github
            className="m-auto" size={24} />
          {/* <Github
        className="m-1 bg-dark rounded-circle"
        size={24}
        color="white"
      /> */}
        </Button>
        <Button
          href="https://stackoverflow.com/users/15534202/egeer"
          className="p-0 m-1 d-flex rounded-circle hover-primary"
          target="new"
          variant="dark"
          style={{ height: 34, width: 34 }}
        >
          {/* <img src={Stack} height={30} className="m-auto" /> */}
          <StackOverflow className="m-auto" size={20} />
        </Button>
        <Button
          href="https://medium.com/@evangeer"
          className="p-0 m-1 d-flex rounded-circle"
          target="new"
          variant="dark"
        >
          {/* </a> */}
          {/* <a href="https://medium.com/@evangeer" className="link-light"> */}
          <Medium className="m-1" size={24} />
          {/* </a> */}
        </Button>
      </div>
    </div>
  </div>;
}
