import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { signOut } from '../../store/authSlice';


export const Navigation: React.FC = () => {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

     const handleSignOut = (e: React.MouseEvent) => {
        e.preventDefault(); 
        localStorage.removeItem('userToken'); 
        dispatch(signOut()); 
    };

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
        {isAuthenticated ? (
          <>
            <Link to="/user" className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              {user.userName}
            </Link>
            <a href="/" onClick={handleSignOut} className="main-nav-item">
                <FontAwesomeIcon icon={faSignOutAlt} /> 
                Sign Out
            </a>
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