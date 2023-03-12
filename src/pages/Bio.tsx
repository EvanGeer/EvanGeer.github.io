

export function Bio(): JSX.Element {
    return (
        <>
        <h2 className="pt-2">Bio</h2>
      <div className="image-wrap">
        <img
          className="float-right"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/IBM_PC-IMG_7271_%28transparent%29.png/220px-IBM_PC-IMG_7271_%28transparent%29.png"
        />
      </div>
      <p>
        I like to tinker with code, be it learning a new language, teaching my
        kiddo how to code with Lego robotics sets, or simply looking for ways to
        simplify and more concisely communicate with a machine. I love to
        refactor complex code (perhaps to a fault) into simple, elegant, modular
        code, leveraging OOP and/or FP principles and design patterns. I first
        started coding in the early 90's writing boot scripts to selectively
        load drivers, etc. so that my XT 286 clone with sub-par specs could run
        the video games I wanted to play, and as a result I have a keen eye
        towards software performance. Since then I have leveraged my coding
        skills to start an internal business process automation group for an
        environmental engineering firm, deliver exceptional new product and
        features for organizations from start-ups to fortune 500 companies.
        <br />
        <br />
        I have led software teams since early 2016, and I love igniting a
        passion for clean code in others. Most recently I led the engineering
        team for a start-up, laying the groundwork for the eventual successful
        exit via acquisition by a fortune 500 company, and worked to seamlessly
        integrate that team into the new organization.
      </p>

      <div className="jumbotron pt-4 pb-3 justify-content-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3sr2hyfV3Iw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>  


        </>
    )
}