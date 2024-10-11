import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
    <h2>Webtoon Library</h2>
    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
  </nav>
);

export default Navbar;
