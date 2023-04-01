import React from 'react';
import JoelsHead from './JoelHiltonHeadshot (1).jpg';

function HomePage() {
  return (
    <>
      <div>
        <h3>Welcome to My Movie Website!!!</h3>
        <h4>I'm Joel Hilton</h4>
        <img src={JoelsHead} alt="Joel's Head"></img>
      </div>
    </>
  );
}

export default HomePage;
