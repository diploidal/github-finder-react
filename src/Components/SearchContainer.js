import React, { useState } from 'react';
import { ResultContainer } from './ResultContainer';

export const SearchContainer = () => {
  let requestData = {};

  const handleRequest = async (event) => {
    const API_LINK = `https://api.github.com/users`;
    event.preventDefault();
    const response = await fetch(`${API_LINK}/${name}`);
    response.json().then((data) => {
      requestData.user = data;
    });
    const repoResponse = await fetch(`${API_LINK}/${name}/repos`);
    repoResponse.json().then((data) => {
      requestData.respos = data;
      setData(requestData);
      console.log(requestData);
    });
  };

  const [name, setName] = useState();
  const [data, setData] = useState();

  return (
    <div>
      {/* <form onSubmit={handleRequest}>
        <input type="text" 
          value={name || ''}
          onChange={(e) => setName(e.target.value)}  
          />
        </form> */}
      <div class="input-group mb-3">
        <form onSubmit={handleRequest}>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}  
          />
        </form>
      </div>
      <ResultContainer requestData={data}/>
    </div>
  )
}