import React from 'react';
import { RepoCard } from './RepositoryCard'

export const ResultContainer = (props) => {
  const user = props.requestData?.user;
  /* 
    TODO:
     [] fix date presentation/formating
     [] cleanup whole component (divide into smaller one eg. card, badges as separated components)
     
  */
  return (
    user ? 
    <div className="container" style={{marginTop: '4rem'}}>
      <div className="card mb-3 mx-auto" style={{maxWidth: '1024px'}}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={user.avatar_url} className="img-thumbnail" alt="profile" style={{borderColor: 'transparent', padding: '0', width: '100%'}}/>
          </div>
          <div className="col-md-6">
            <div className="card-body" style={{boxShadow: '0px 2px 80px #888888', height: '100%'}}>
              <h1 className="display-4">{user.login}</h1>
              <div className="row" style={{textAlign: 'center'}}>
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
      <RepoCard repoData={props}/>
    </div>
    : <h1>Ohhh snap there is nothing here...</h1>
  )
}