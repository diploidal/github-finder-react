import React from 'react';
import { RepoCard } from './RepositoryCard'
// import { Emote } from './ASCIIEmotes';

export const ResultContainer = (props) => {
  const requestResultStatus = props.requestData?.response?.ok;
  const user = props.requestData?.user;

 const convertDate = (date) => {
  const dateToEpoch = Date.parse(date);
  const createDateObject = new Date(dateToEpoch)
  const formatedDate = createDateObject.toUTCString()
  return formatedDate;
}

  return (
    requestResultStatus ? 
    <div className="container" style={{marginTop: '4rem'}}>
      <div className="card mb-5 mx-auto" style={{maxWidth: '1024px', border: 'none'}}>
        <div className="row g-0">
          <div className="col-md-6" style={{alignSelf: 'center'}}>
            <img src={user.avatar_url} className="img-thumbnail" alt="profile" style={{borderColor: 'transparent', padding: '0', width: '100%'}}/>
          </div>
          <div className="col-md-6">
            <div className="card-body" style={{height: '100%'}}>
              <b><h1 className="display-4">{user.login}</h1></b>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <h5 className="card-text my-2">
                    <small className="text-muted">Name:<br/></small>
                    {user.name}
                  </h5>
                </div>
                <div className="col-xs-12 col-md-6">
                  <h5 className="card-text my-2">
                    <small className="text-muted">Location:<br/></small>
                    {user.location}
                  </h5>
                </div>
                <div className="col-xs-12 col-md-6">
                  <h5 className="card-text my-2">
                    <small className="text-muted">Company:<br/></small>
                    {user.company}
                  </h5>
                </div>
                <div className="col-xs-12 col-md-6">
                  <h5 className="card-text my-2">
                    <small className="text-muted">uID:<br/></small>
                    {user.id}
                  </h5>
                </div>
              </div>
              <div>
                <h5 className="mt-2 mb-0">
                  <small className="text-muted">Bio:</small>
                </h5>
                <p className="card-text">{user.bio}</p>
                <a href={user.blog} className="link-primary">{user.blog}</a>
              </div>
                <div className="mt-5">
                  <h5>Account info</h5>
                  <p className="card-text"><small className="text-muted">Last update on {convertDate(user.updated_at)}</small></p>
                  <p className="card-text"><small className="text-muted">Created at {convertDate(user.created_at)}</small></p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <RepoCard repoData={props}/>
    </div>
    : null
  )
}