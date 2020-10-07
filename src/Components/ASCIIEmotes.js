import React from 'react';

export const Emote = () => {
  const emotesArrray = [
    // eslint-disable-next-line
    '¯\_(ツ)_/¯', '(≥o≤)', '(;˚Δ˚)', '(^_^)', "(o_o)", '(>_<)'
  ];
  
  return (
    <div className="container" style={{textAlign: 'center'}}>
      <h1 style={{fontSize: '16vw', color: '#dadce0'}}>¯\_(ツ)_/¯</h1>
      <div>Can't find any Github user.</div>
    </div>
  )
}