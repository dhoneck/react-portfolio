import React from 'react';
import dhPicture from '../../dh_picture.png'
export default function Home() {
  return (
    <div className="p-3">
      <h1>I'm Dustin, a Web Developer</h1>
      <div className="columns">
        <p className="column is-half">
          I am a full web stack developer that specializes in the MERN stack.
        </p>
        <img className="column is-half" src={dhPicture}/>
      </div>
    </div>
  );
}
