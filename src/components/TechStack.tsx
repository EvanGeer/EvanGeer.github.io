import bootstrapLogo from "../images/tech/bootstrapLogo.png";
import cSharpLogo from "../images/tech/cSharpLogo.png";
import firebaseLogo from "../images/tech/firebaseLogo.png";
import javaScriptLogo from "../images/tech/javaScriptLogo.png";
import msSqlServerLogo from "../images/tech/msSqlServerLogo.png";
import reactLogo from "../images/tech/reactLogo.png";
import revitLogo from "../images/tech/revitLogo.png";
import typeScriptLogo from "../images/tech/typeScriptLogo.png";
import sqlServerLogo from "../images/tech/sqlServerLogo.png";
import sqlLogo from "../images/tech/sqlLogo.png";
import wpfLogo from "../images/tech/wpfLogo.png";
import xamarinLogo from "../images/tech/xamarinLogo.svg";

enum Tech {
  BOOTSTRAP = "Bootstrap",
  C_SHARP = "C#",
  FIREBASE = "Firebase",
  MS_SQL = "MS SQL Server",
  REACT = "React",
  REVIT = "Revit",
  TYPE_SCRIPT = "TypeScript",
  JAVA_SCRIPT = "JavaScript",
  WPF = "WPF",
  XAMARIN = "Xamarin",
}

export function TechStack({
  techStack,
  className = "",
  size = 25,
  reversed = false,
}: {
  techStack: string[];
  className?: string;
  size?: number;
  reversed?: boolean;
}) {
  const logos = new Map<string, JSX.Element>([
    [Tech.BOOTSTRAP, <LogoImg src={bootstrapLogo} alt={Tech.BOOTSTRAP} />],
    [Tech.C_SHARP, <LogoImg src={cSharpLogo} alt={Tech.C_SHARP} />],
    [Tech.FIREBASE, <LogoImg src={firebaseLogo} alt={Tech.FIREBASE} />],
    [Tech.JAVA_SCRIPT, <LogoImg src={javaScriptLogo} alt={Tech.JAVA_SCRIPT} />],
    [Tech.MS_SQL, <LogoImg src={sqlServerLogo} alt={Tech.MS_SQL} />],
    [Tech.REACT, <LogoImg src={reactLogo} alt={Tech.REACT} />],
    [Tech.REVIT, <LogoImg src={revitLogo} alt={Tech.REVIT} />],
    [Tech.TYPE_SCRIPT, <LogoImg src={typeScriptLogo} alt={Tech.TYPE_SCRIPT} />],
    [Tech.WPF, <LogoImg src={wpfLogo} alt={Tech.WPF} />],
    [Tech.XAMARIN, <LogoImg src={xamarinLogo} alt={Tech.XAMARIN} />],
  ]);

  function LogoImg({ src, alt }: { src: string; alt: string }) {
    return (
      <img
        key={`${alt}-${src}`}
        className={className}
        src={src}
        alt={alt}
        title={alt}
        style={{
          height: `${size}px`,
          // filter: " grayscale(100%)"
        }}
      />
    );
  }

  function AltText({ text }: { text: string }) {
    return <small className={className}>{text}</small>;
  }

  return (
    <>
      {reversed
        ? techStack
            .sort()
            .reverse()
            .map((tech) => logos.get(tech))
        : techStack
            .sort()
            .map((tech) => logos.get(tech))}
    </>
  );
}
