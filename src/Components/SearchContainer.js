import React, { useState } from 'react';
import { ResultContainer } from './ResultContainer';
import styles from './SearchContainer.module.css'

export const SearchContainer = () => {
  let requestData = {};

  const handleRequest = async (event) => {
    const API_LINK = `https://api.github.com/users`;
    event.preventDefault();
    const response = await fetch(`${API_LINK}/${name}`);
    // console.log(response)
    if(!response.ok) {
      setData(response)
      console.log(response)
      // return
    } else {
      response.json().then((data) => {
        requestData.user = data;
      });
      const repoResponse = await fetch(`${API_LINK}/${name}/repos`);
      repoResponse.json().then((data) => {
        // console.log(data)
        requestData.repos = data;
        setData(requestData);
        // console.log(requestData);
      })
    }
    // console.log(data)
  };

  const [name, setName] = useState();
  const [data, setData] = useState();

  return (
    <>
      <div style={{padding: '6rem 0', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgb(98,98,98)', background: 'linear-gradient(180deg, rgba(195,195,195,1) 0%, rgba(255,255,255,1) 80%)'}}>
      <h1 className="mb-5" style={{textAlign: 'center'}}>Search for a Github username to start...</h1>
        <form className={styles.formFocus} onSubmit={handleRequest}>
          <input 
          type="text" 
          className="form-control" 
          placeholder="Github Username" 
          aria-label="Username" 
          aria-describedby="basic-addon1"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}  
          />
        </form>
      </div>
      <ResultContainer requestData={data}/>
    </>
  )
}