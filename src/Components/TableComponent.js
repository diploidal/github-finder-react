import React from 'react'

export const Table = (props) => {
  const data = props.repoData.requestData.repos;
  console.log(data)
  return(
    <div className="table-responsive">
    <table className="table caption-top table-striped table-hover">
      <caption>List of repos</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
        <tbody>

        {data ? data.map((element, index) => {
          return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{element.id}</td>
                <td>{element.watchers}</td>
                <td>{element.has_issues}</td>
              </tr>
          ) 
        }) : <h1>Oops there are no repositories <span role="img">😞</span></h1>}

      </tbody>
    </table>
    </div>
  )
}