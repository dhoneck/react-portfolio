import React from 'react';
import DHPicture from '../../dh_picture.png'

export default function Home() {
  return (
    <>
      <section className="p-3">
        <div className="columns">
          <div className="column is-half">
            <h1>I'm Dustin, a Web Developer</h1>
            <p>I am a full web stack developer that specializes in the MERN stack.</p>
          </div>
          <div className="column is-one-half image-container">
            <img id='profile-pic' src={ DHPicture }/>
          </div>  
        </div>
      </section>
    </>
  );
}
