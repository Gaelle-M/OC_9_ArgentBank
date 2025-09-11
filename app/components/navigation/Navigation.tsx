import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 

type NavigationProps = {
  isLoggedIn: boolean;
  userName?: string; 
};

export const Navigation: React.FC<NavigationProps> = ({ isLoggedIn, userName }) => {
  return (
    <div className="navigation">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./assets/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Link to="/user" className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              {userName}
            </Link>
            <Link to="/" className="main-nav-item">
              <FontAwesomeIcon icon={faSignOutAlt} /> 
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/sign-in" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};