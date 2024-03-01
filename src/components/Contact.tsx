import stackOverflowLogo from "../images/StackOverflow.png";
import stackOverflowLogoSVG from "../images/stackoverflow-official.svg";
import pipeSchematic from "../images/pipeschematic.png";
import linkedInLogo from "../images/LinkedIn_Logo.svg.png";
import { Github } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import eg from "../images/EG.png";
import { MainContainer, MainContainerRight } from "../pages/MainContainer";

export function Contact() {
  const SocialLink = ({
    icon,
    link,
    text,
  }: {
    icon: JSX.Element;
    link: string;
    text: string;
  }) => {
    return (
      <div style={{ height: 45 }} className="d-flex align-items-center mb-2">
        <div className="col-1 justify-content-center d-flex p-0">
          {icon}
          </div>
        <div className="col-11 d-flex">
          <span className="text-secondary">
            <a href={link} className="link-light" style={{fontSize: 18}}>
              {text}
            </a>
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <MainContainerRight image={
      <img
        style={{height:"110%", width:"100%", objectFit: "cover"}}
        src={pipeSchematic}/>
      //  src="https://thumbs.dreamstime.com/z/sketch-piping-design-mixed-to-power-plant-photo-56391800.jpg?ct=jpeg"/>
      //  src="https://thumbs.dreamstime.com/z/sketch-piping-design-mixed-to-industrial-equipment-photo-60050291.jpg?ct=jpeg"/>
      //  src="https://thumbs.dreamstime.com/z/sketch-piping-design-concept-motion-blur-effect-toned-image-92019376.jpg?ct=jpeg"/>
        // src="https://thumbs.dreamstime.com/z/sketch-piping-design-mixed-to-industrial-equipment-photo-cables-as-found-inside-modern-power-plant-60050607.jpg?ct=jpeg"/>
        // src="https://thumbs.dreamstime.com/z/sketch-piping-design-mixed-industrial-equipment-photos-photo-32609927.jpg?ct=jpeg"/>
        // src="https://thumbs.dreamstime.com/z/industrial-engineering-technology-power-designing-construction-68054259.jpg?ct=jpeg"/>
        // src="https://thumbs.dreamstime.com/z/engineering-electrica-scheme-16480279.jpg?ct=jpeg"/>
        }>
        <div className="display-4 text-secondary border-bottom border-1 border-dark mb-5">Contact</div>
        <SocialLink
          icon={<img src={linkedInLogo} height={36} className="m-0" />}
          link={"https://www.linkedin.com/in/evangeer/"}
          text={"linkedin.com/in/EvanGeer"}
        />
        <SocialLink
          icon={<Github size={36} />}
          link={"https://github.com/EvanGeer"}
          text={"github.com/EvanGeer"}
        />
        <SocialLink
          icon={<img src={stackOverflowLogo} height={45} className="m-0" />}
          link={"https://stackoverflow.com/users/15534202/egeer"}
          text={"stackoverflow.com/users/15534202/EGeer"}
        />
      </MainContainerRight>
    </>
  );
}
