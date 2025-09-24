import React, { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';


const navItems = [
  { to: '/', label: 'Accueil', end: true },
  // { to: '/about', label: 'À propos' },
  // { to: '/contact', label: 'Contact' },
];

const Layout: React.FC = () => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const displayName =
    user?.fullName ||
    user?.firstName ||
    user?.primaryEmailAddress?.emailAddress ||
    'Utilisateur';

  const linkClasses = (isActive: boolean) =>
    [
      'px-3 py-2 text-sm font-medium rounded-xl transition-all',
      'hover:opacity-90 hover:underline underline-offset-8',
      isActive ? 'text-white bg-white/10' : 'text-zinc-200',
    ].join(' ');

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100">
      {/* NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-900/40 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/30">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo + Brand */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/" className="flex items-center gap-2">
             
              <span className="text-base font-semibold tracking-wide">Valy Bamba · Portfolio</span>
            </Link>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end}
                className={({ isActive }) => linkClasses(isActive)}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right zone (CTA + Auth) */}
          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 transition"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
            >
              Télécharger CV
            </motion.a>

            <SignedOut>
              <SignInButton mode="modal">
                <motion.button
                  className="inline-flex items-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Se connecter
                </motion.button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <span className="hidden lg:inline text-sm font-medium text-zinc-200">Bonjour, {displayName}</span>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile toggler */}
          <motion.button
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-zinc-900/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
              <nav className="flex flex-col gap-1">
                {navItems.map(({ to, label, end }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        'rounded-lg px-3 py-2 text-base font-medium',
                        isActive ? 'bg-white/10 text-white' : 'text-zinc-200 hover:bg-white/5',
                      ].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                ))}

                <div className="mt-2 flex items-center gap-2">
                  <motion.a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-center text-sm font-medium hover:bg-white/20"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Télécharger CV
                  </motion.a>

                  <SignedOut>
                    <SignInButton mode="modal">
                      <motion.button
                        className="flex-1 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium hover:bg-white/10"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        Se connecter
                      </motion.button>
                    </SignInButton>
                  </SignedOut>

                  <SignedIn>
                    <div className="flex flex-1 items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <span className="truncate text-sm">{displayName}</span>
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </SignedIn>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Valy Bamba — Tous droits réservés.
      </footer>
    </div>
  );
};

export default Layout;
