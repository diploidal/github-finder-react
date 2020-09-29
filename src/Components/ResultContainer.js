import React from 'react';
// import { Card } from './ui/Card';
// import { useStyles } from './ResultContainer.jss'

export const ResultContainer = (props) => {
  // const classes = useStyles();
  const user = props.requestData?.user;

  return (
    user ? 
    <div>
      <div style={{marginTop: '10rem'}}>
        <h1>This is just dummy data</h1>
        <img src={user.avatar_url} alt="user"></img> 
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
    </div>
    : <h1>Ohhh snap there is nothing here...</h1>
  )
}