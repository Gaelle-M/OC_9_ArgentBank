import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

export const Navigation: React.FC<{}> = () => {
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
        <Link to="/sign-in" className="main-nav-item">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </Link>
      </div>
        </div>
    )
}