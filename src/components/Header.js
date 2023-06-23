import React from 'react';

function Header({ currentPage, handlePageChange }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item name-container'>
          Dustin Honeck
          <br />
          Full Stack Developer
        </a>

        <a
          onClick={() => {
            setIsActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className="navbar-item">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'navbar-item active' : 'navbar-item'}
            >
              Home
            </a>
          </div>

          <div className="navbar-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'navbar-item active' : 'navbar-item'}
            >
              Portfolio
            </a>
          </div>

          <div className="navbar-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'navbar-item active' : 'navbar-item'}
            >
              About
            </a>
          </div>

          <div className="navbar-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'navbar-item active' : 'navbar-item'}
            >
              Resume
            </a>
          </div>

          <div className="navbar-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'navbar-item active' : 'navbar-item'}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;