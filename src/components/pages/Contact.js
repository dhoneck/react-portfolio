import React from 'react';

export default function Contact() {
  return (
    <div className='p-3'>
      <h1>Contact</h1>
      <p>
        Contact me with any of the following methods:
      </p>
      <ul className='contact-list'>
        <li>Email: <a href='mailto:dustin.honeck@gmail.com'>dustin.honeck@gmail.com</a></li>
        <li>Phone: <a href='tel:4148814276'>(414) 881-4276</a></li>
        <li>LinkedIn: <a href='https://www.linkedin.com/in/dustin-honeck/' target='_blank'>/dustin-honeck</a></li>
        <li>GitHub: <a href='https://github.com/dhoneck' target='_blank'>/dustin-honeck</a></li>
      </ul>
    </div>
  );
}
