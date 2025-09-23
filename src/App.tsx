import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layouts from './components/Layouts';
import About from './pages/About.tsx';
import Contact from './pages/contact.tsx';
import { SignIn } from '@clerk/clerk-react';
import Home from './pages/Home.tsx';



// Page Login qui utilise la page d’auth Clerk intégrée
const Login: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
    <SignIn routing="path" path="/login" />
  </div>
);

const App: React.FC = () => {
  return (
    <Routes>
      {/* Route parente = Layout */}
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
