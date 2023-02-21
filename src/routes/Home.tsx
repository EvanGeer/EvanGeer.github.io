import "../styles/style.css";
import ProjectHighlights from "../components/ProjectHighlights";


function Home() {
  return (
    <>
      {/* Summary */}
      <h3 className="display-4 text-info">Evan Geer</h3>
      <h3 className="text-muted">
        Engineering Leadership | Product Vision | Software Development{" "}
      </h3>
      <p className="text-light">
        Leader in engineering, software, and construction with a passion for
        scaling agile teams and driving excellence. Diverse background with
        expertise in software development leadership in the software as a
        service (SaaS) environment, object oriented software design and
        architecture, agile team optimization, water/wastewater engineering,
        data management, building information modeling (BIM), and virtual design
        and construction (VDC).
      </p>

      {/* Project Highlights */}
      <h2 className="text-info">Project Highlights</h2>
      <ProjectHighlights />
    </>
  );
}

export default Home;
