import React from 'react'

export const Table = (props) => {
  const data = props.repoData.requestData.repos;
  console.log(data)
  return(
    <>
      {data ? data.map((element, index) => {
        return (
          <div key={index} className="card" style={{width: '34rem'}}>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{element.name}</h5>
              <div className="row">
                <div className="col">
                  <p className="card-subtitle mb-2 text-muted">
                    <small className="text-muted">
                      Created {element.created_at}
                    </small>
                  </p>
                </div>
                <div className="col">
                  <p className="card-subtitle mb-2 text-muted">
                    <small className="text-muted">
                      Updated {element.updated_at}
                    </small>
                  </p>
                </div>
              </div>
              <p className="card-text">{element.description}</p>
              <a href={element.html_url} target="_blank" rel="noopener noreferrer" className="card-link">
                Check this repo
              </a>
            </div>
          </div>
        ) 
      }) : <h1>Oops there are no repositories <span aria-label="sad-emoji" role="img">😞</span></h1>}
    </>


  )
}