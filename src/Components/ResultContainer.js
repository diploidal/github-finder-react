import React from 'react';
import { RepositoryCard } from './ui/RepositoryCard'
import { UserCard } from './ui/UserCard'
import { Emote } from './ASCIIEmotes'; //- render this when search is done but without any result

export const ResultContainer = (props) => {
  const requestResultStatus = props.requestData?.response?.ok;
  const statusNumber = props.requestData?.response?.status

  if(requestResultStatus) {
    return (
      <div className="container" style={{marginTop: '4rem'}}>
        <UserCard userData={props}/>
        <RepositoryCard repoData={props}/>
      </div>
    )
  } else if(statusNumber !== undefined && statusNumber !== 200) {
    return (
      <Emote/>
    )
  } else {
    return (
      null
    )
  }
}