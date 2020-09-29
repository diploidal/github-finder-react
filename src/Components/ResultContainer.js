import React from 'react';

export const ResultContainer = (props) => {
  const user = props.requestData?.user;

  return (
    user ? 
    <div>
      <div className="card mb-3 mx-auto" style={{maxWidth: '1024px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={user.avatar_url} className="img-thumbnail" alt="profile"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{user.login}</h1>
              <div className="row">
                <div className="col">
                  <p className="card-text">
                    <small className="text-muted">{user.name}</small>
                    </p>
                </div>
                <div className="col">
                  <p className="card-text">
                    <small className="text-muted">{user.location}</small>
                    </p>
                </div>
                <div className="col">
                  <p className="card-text">
                    <small className="text-muted">{user.company}</small>
                    </p>
                </div>
                <div className="col">
                  <p className="card-text"><small className="text-muted">{user.id}</small></p>
                </div>
              </div>
                <p className="card-text">{user.bio}</p>
                <a href={user.blog} className="link-primary">{user.blog}</a>
                <p className="card-text"><small className="text-muted">Last update {user.updated_at}</small></p>
                <p className="card-text"><small className="text-muted">Created at {user.created_at}</small></p>
            </div>
          </div>
        </div>
      </div>
      {/* Dummy data just for development */}
        <h4>Name: {user.name}</h4> 
        <h4>Login: {user.login}</h4> 
        <h4>Location: {user.location}</h4> 
        <h4>User ID: {user.id}</h4>
        <h4>Company: {user.company}</h4>
        <h4>Has {user.followers} followers</h4>
        <h4>Follows {user.following} users</h4>
        <h4>User ID: {user.id}</h4>
        <h4>{user.public_repos} public repositories</h4>
        <h4>Last update - {user.updated_at}</h4>
    </div>
    : <h1>Ohhh snap there is nothing here...</h1>
  )
}