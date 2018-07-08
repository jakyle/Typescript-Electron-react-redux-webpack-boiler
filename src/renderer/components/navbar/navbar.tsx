import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.scss';

interface NavbarProps {
}

const Navbar: React.SFC<NavbarProps> = () => 
  <div className={styles.navbar}>
    <Link to='/'>Home</Link>
    <Link to='/test'>Test</Link>
  </div>

export default Navbar;