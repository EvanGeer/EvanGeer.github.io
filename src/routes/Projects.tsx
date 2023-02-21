export function Projects() {
    return (
        <div className="container p-5">
        <h2><br />MITx MERN
          <small className="text-muted">
            | Full Stack with MongoDB, Express, React and Node.js
          </small>
        </h2>
  
   
              <div className="row  bg-secondary p-3 no-gutter border border-dark rounded">
                <div className="jumbotron ml-0 pt-4 pb-3 mb-0">
                  <h3 className="text-dark">
                  From the brochure
                  <a className="btn btn-primary btn-sm float-right" href="https://executive-ed.xpro.mit.edu/professional-certificate-coding">more info</a>        
                  </h3>
                  <hr className="my-2" />
                  <p className="lead text-dark">
                    This program is organized into three main modules using the MERN stack: Web Development, Front-End Development/React, and Back-End Development. Each module builds on the next, and is designed to prepare you to enter the job market as an entry-level full-stack developer, or to specialize in one of these areas with further skill development.
                    </p>
        
                    <br/>
                    <br/>
                    <b>Key Take-Aways</b>
                    <ul className="lead text-dark">
                      <li>Build, test, and deploy a web application using the MERN stack</li>
                      <li>Build, test, and deploy APIs</li>
                      <li>Build, test, and deploy a front-end web application using React</li>
                      <li>Setup CI/CD pipelines to deploy a React application</li>
                      <li>Build a full stack portfolio in GitHub</li>
                    </ul>
                </div>
              </div>
  
        <br/>
        <div
          className="row row-cols-3 bg-secondary p-3 no-gutter border border-dark rounded"
        >
        <div className="jumbotron ml-0 pt-4 pb-3 mb-0">
          <h3 className="display-5 text-dark">
          Class Portfolio
          </h3>
          <hr className="my-2" />
          <div
          className="row row-cols-3 p-0 no-gutter"
        >
  
          <div className="col p-0">
            <div className="card bg-dark">
              <h5 className="card-header bg-primary">PacMan Game</h5>
              <img
                className="card-img-top"
                src="https://evangeer.github.io/MITxMERN-PacMan/sample.gif"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Create PacMan and Kriby sprites, and let them battle for
                  supremacy! This project illustrates some dynamic interaction
                  with the DOM as well as some physical space awareness.
                </p>
                <a
                  href="https://evangeer.github.io/MITxMERN-PacMan/"
                  className="btn btn-primary"
                  >More Info</a
                >
                <a
                  href="https://github.com/EvanGeer/MITxMERN-PacMan"
                  className="btn btn-secondary"
                  >Repo</a
                >
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark">
              <h5 className="card-header bg-primary">MBTA Transit Tracker</h5>
              <img
                className="card-img-top"
                src="https://evangeer.github.io/MITxMERN-TransitTracker/sample.gif"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Track realtime location and capacity of MBTA buses. It's great
                  if you're trying to get to MIT!
                </p>
                <a
                  href="https://evangeer.github.io/MITxMERN-TransitTracker"
                  className="btn btn-primary"
                  >More Info</a
                >
                <a
                  href="https://github.com/EvanGeer/MITxMERN-TransitTracker"
                  className="btn btn-secondary"
                  >Repo</a
                >
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className="card bg-dark">
              <h5 className="card-header bg-primary">Eyes Animation</h5>
              <img
                className="card-img-top"
                src="https://evangeer.github.io/MITxMERN-Eyes/EyesSample.gif"
                alt="Card image cap"
              />
              <div className="card-body bg-dark">
                <p className="card-text">
                  Simple demo of working with css/js/html to animate the DOM and
                  track mouse movement. Plus you get to make a green monster
                  smile!
                </p>
                <a
                  href="https://evangeer.github.io/MITxMERN-Eyes/"
                  className="btn btn-primary"
                  >More Info</a
                >
                <a
                  href="https://github.com/EvanGeer/MITxMERN-Eyes"
                  className="btn btn-secondary"
                  >Repo</a
                >
              </div>
            </div>
          </div>
        </div>
  </div></div>
  <br/>
  
      </div>
    )
}