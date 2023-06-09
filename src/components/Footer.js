import React from 'react';

import GitHubIcon from '../github-icon.png';
import LinkedInIcon from '../linkedin-icon.png';
import PhoneIcon from '../phone-icon.png';
import EmailIcon from '../email-icon.png';

function Header({ currentPage, handlePageChange }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <footer>
      <a href='https://github.com/dhoneck' target='_blank'><img src={ GitHubIcon }></img></a>
      <a href='https://www.linkedin.com/in/dustin-honeck/' target='_blank'><img src={ LinkedInIcon}></img></a>
      <a href='tel:4148814276'><img src={ PhoneIcon }></img></a>
      <a href='mailto:dustin.honeck@gmail.com'><img src={ EmailIcon }></img></a>
    </footer>
  );
}

export default Header;