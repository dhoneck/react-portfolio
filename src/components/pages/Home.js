import React from 'react';
import DHPicture from '../../images/dh_picture.png'

export default function Home() {
  return (
    <>
      <section className='p-3'>
        <div className='columns'>
          <div className='column is-half'>
            <h1>I'm Dustin, a Web Developer</h1>
            <p>I am a full stack web developer that specializes in the MERN stack and Python with Django. I am currently looking for a full-time position as a web developer or software engineer.
            </p>
          </div>
          <div className='column is-one-half image-container'>
            <img id='profile-pic' src={ DHPicture }/>
          </div>  
        </div>
      </section>
    </>
  );
}
