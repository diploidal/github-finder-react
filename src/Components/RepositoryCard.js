import React from 'react'

export const RepoCard = (props) => {
  const data = props.repoData.requestData.repos;

  const convertDate = (date) => {
    const dateToEpoch = Date.parse(date);
    const createDateObject = new Date(dateToEpoch)
    const formatedDate = createDateObject.toUTCString()
    return formatedDate;
  }

  return(
    <div className="container">
      {data.length > 0 ? data.map((element, index) => {
        return (
          <div key={index} className="card mx-auto my-4" style={{maxWidth: '1024px'}}>
            <div className="card-body" style={{boxShadow: '0px 2px 30px #888888'}}>
              <h5 className="card-title font-weight-bold">{element.name}</h5>
              <p className="card-text">{element.description}</p>
              <div className="mb-2">
                <span className="badge bg-primary mr-2">Forks: {element.forks_count}</span>
                <span className="badge bg-primary mr-2">Watchers: {element.watchers_count}</span>
                <span className="badge bg-primary">Stars: {element.stargazers_count}</span>
              </div>
              <div className="row">
                <div className="col">
                  <p className="card-subtitle mb-2 text-muted">
                    <small className="text-muted">
                      Created:<br/> {convertDate(element.created_at)}
                    </small>
                  </p>
                </div>
                <div className="col">
                  <p className="card-subtitle mb-2 text-muted">
                    <small className="text-muted">
                      Updated:<br/> {convertDate(element.updated_at)}
                    </small>
                  </p>
                </div>
              </div>
              <a href={element.html_url} target="_blank" rel="noopener noreferrer" className="card-link">
                Check this repo
              </a>
            </div>
          </div>
        ) 
      }) : <h1>Oops there are no repositories <span aria-label="sad-emoji" role="img">😞</span></h1>}
    </div>


  )
}