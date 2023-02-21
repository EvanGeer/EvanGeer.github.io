
export function Skills() {
    return (<>
        <h3>Skills</h3>
        <div
          className="row row-cols-3 bg-secondary p-3 no-gutter border border-dark rounded"
          >
          <div className="col p-0">
            <div className="card bg-dark">
              <h5 className="card-header bg-info">Leadership</h5>
              <div className="card-body">
                <ul className="card-text">
                  <li>Scaling engineering teams startup to enterprise</li>
                  <li>Agile team leadership</li>
                  <li>Continuous improvement</li>
                  <li>Organizational change management</li>
                  <li>Strategic planning</li>
                  <li>Conflict resolution</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark">
              <h5 className="card-header bg-info">Product</h5>
              <div className="card-body">
                <ul className="card-text">
                  <li>Problem identification</li>
                  <li>Requirements gathering</li>
                  <li>Project execution</li>
                  <li>Market research</li>
                  <li>Customer relationship buildign</li>
                  <li>Agile/Scrum/Kanban</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className="card bg-dark">
              <h5 className="card-header bg-info">Technical</h5>
              <div className="card-body bg-dark">
                <ul className="card-text">
                  <li>C# (advanced)</li>
                  <li>MS SQL Server/T-SQL (intermediate)</li>
                  <li>JavaScript (intermediate)</li>
                  <li>Java (intermediate)</li>
                  <li>Visual Basic (intermediate)</li>
                  <li>AWS/Azure (basic)</li>
                  <li>Python (basic)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3>
          Continued Learning
          <small className="text-muted">
            <a href="MITxMERN.html">Full Stack with MERN via MITx</a>
          </small>
        </h3>
    </>
    )
}