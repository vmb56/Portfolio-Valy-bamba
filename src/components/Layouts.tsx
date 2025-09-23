import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import '../css/layout.css';
import Logo from '../assets/Logo.png';

const Layout: React.FC = () => {
  const { user } = useUser();
  const displayName =
    user?.fullName ||
    user?.firstName ||
    user?.primaryEmailAddress?.emailAddress ||
    'Utilisateur';

  // Pour NavLink (lien actif)
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'active' : ''}`;

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          {<div>E-COMMERCE</div>}
          <div className="nav-logo">
            <h2 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
              >
                {/* Place ton fichier dans /public/logo.png pour ce src absolu */}
                <img src={Logo} alt="Logo" width={40} height={40} />
                <span style={{ color: '#ecf0f1' }}>PORTFOLIO</span>
              </Link>
            </h2>
          </div>

          {/* Menu principal */}
          <ul className="nav-menu">
            <li><NavLink to="/" end className={linkClass}>Accueil</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>À propos</NavLink></li>
            {/* Le lien Login n’apparaît que si l’utilisateur est déconnecté */}
            <li>
              <SignedOut>
                <NavLink to="/login" className={linkClass}>Login</NavLink>
              </SignedOut>
            </li>
            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>


          {/* Zone utilisateur (à droite) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <SignedOut>
              {/* Ouvre la modale Clerk (en plus de la page /login si tu veux) */}
              <SignInButton mode="modal">
                <button className="nav-link" style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}>
                  Se connecter
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <span style={{ color: '#ecf0f1', fontWeight: 500, whiteSpace: 'nowrap' }}>
                Bonjour, {displayName}
              </span>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Contenu des pages */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
