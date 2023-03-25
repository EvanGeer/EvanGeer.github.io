import { OverlayTrigger, Tooltip } from "react-bootstrap";
import TechLogos from "../types/TechLogos";

export function TechStack({
  techStack,
  className = "",
  size = 25,
  reversed = false,
  includeText = false,
  onClicked = null,
}: {
  techStack: string[];
  className?: string;
  size?: number;
  reversed?: boolean;
  includeText?: boolean;
  onClicked?: (string: string) => void;
}) {
  function LogoImg({
    src,
    alt,
    includeText = false,
  }: {
    src: string;
    alt: string;
    includeText?: boolean;
  }) {
    return includeText ? (
      <LogoImgVertical src={src} alt={alt} />
    ) : (
      <LogoImgHorizontal src={src} alt={alt} />
    );
  }

  function LogoImgHorizontal({ src, alt }: { src: string; alt: string }) {
    return (
      <OverlayTrigger
        overlay={<Tooltip id={`ToolTip-${alt}`}>{alt}</Tooltip>}
        placement="bottom"
      >
        <img
          key={`${alt}-${src}`}
          className={className + " align-self-center"}
          src={src}
          alt={alt}
          // title={alt}
          style={{
            height: `${size}px`,
          }}
          onClick={onClicked ? () => onClicked(alt) : null}
        />
      </OverlayTrigger>
    );
  }
  function LogoImgVertical({ src, alt }: { src: string; alt: string }) {
    return (
      <OverlayTrigger
        overlay={<Tooltip id={`ToolTip-${alt}`}>{alt}</Tooltip>}
        placement="bottom"
      >
        <div
          key={`${alt}-${src}`}
          className={className + " d-flex"}
          onClick={onClicked ? () => onClicked(alt) : null}
        >
          <img
            className="align-self-center"
            src={src}
            alt={alt}
            // title={alt}
            style={{
              height: `${size}px`,
            }}
          />
          {includeText ? <AltText text={alt} /> : null}
        </div>
      </OverlayTrigger>
    );
  }

  function AltText({ text }: { text: string }) {
    return <div className={" align-content-center d-flex ml-1"}>{text}</div>;
  }

  return (
    <>
      {reversed
        ? techStack
            .sort()
            .reverse()
            .map((tech) => TechLogos.get(tech))
            .filter((x) => x)
        : techStack
            .sort()
            .map((tech) => (
              <LogoImg alt={tech} key={tech} src={TechLogos.get(tech)} />
            ))
            .filter((x) => x)}
    </>
  );
}
