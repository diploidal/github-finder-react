import React from 'react';

export const Emote = () => {
  
  const emotesAndTexts = {
    emotes: [`¯\\_(ツ)_/¯`, `(≥o≤)`, `(;˚Δ˚)`, `(^_^)`, `(o_o)`, `(>_<)`],
    texts: [`Ahhh dang it !`, `Ooops, nothing here !`, `Can't find any Github user`, `Ugh...`]
  }

  function getRandom() {
    const selectedRandomEmoji = emotesAndTexts.emotes[Math.floor(Math.random()*emotesAndTexts.emotes.length)];
    const selectedRandomText = emotesAndTexts.texts[Math.floor(Math.random()*emotesAndTexts.texts.length)];

    return {
      selectedRandomEmoji,
      selectedRandomText
    }
  }

  const random = getRandom();
  const emoji = random.selectedRandomEmoji;
  const text = random.selectedRandomText;

  return (
    <div className="container" style={{textAlign: 'center'}}>
      <h1 style={{fontSize: '16vw', color: '#dadce0'}}>{emoji}</h1>
      <h2 className="mt-2">{text}</h2>
    </div>
  )
}