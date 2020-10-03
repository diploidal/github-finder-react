import React from 'react';
import { RepoCard } from './RepositoryCard'
import { Emote } from './ASCIIEmotes';

export const ResultContainer = (props) => {

  const requestResultStatus = props.requestData?.response?.ok;
  console.log(`requestResultStatus ${requestResultStatus}`)
  const user = props.requestData?.user;
  /* 
    TODO:
     [x] fix date presentation/formating
     [] cleanup whole component (divide into smaller one eg. card, badges as separated components)
     
  */

 const convertDate = (date) => {
  const dateToEpoch = Date.parse(date);
  const createDateObject = new Date(dateToEpoch)
  const formatedDate = createDateObject.toUTCString()
  return formatedDate;
}

  return (
    requestResultStatus ? 
    <div className="container" style={{marginTop: '4rem'}}>
      <div className="card mb-3 mx-auto" style={{maxWidth: '1024px'}}>
        <div className="row g-0">
          <div className="col-md-6" style={{alignSelf: 'center'}}>
            <img src={user.avatar_url} className="img-thumbnail" alt="profile" style={{borderColor: 'transparent', padding: '0', width: '100%'}}/>
          </div>
          <div className="col-md-6">
            <div className="card-body" style={{boxShadow: '0px 2px 30px #888888', height: '100%'}}>
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
                <p className="card-text mt-3">{user.bio}</p>
                <a href={user.blog} className="link-primary">{user.blog}</a>
                <div className="mt-5">
                  <h5>Account info</h5>
                  <p className="card-text"><small className="text-muted">Last update on {convertDate(user.updated_at)}</small></p>
                  <p className="card-text"><small className="text-muted">Created at {convertDate(user.created_at)}</small></p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <RepoCard repoData={props}/>
    </div>
    : <Emote/>
  )
}