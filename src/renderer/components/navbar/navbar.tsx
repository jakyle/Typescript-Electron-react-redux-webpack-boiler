import * as React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
}

const Navbar: React.SFC<NavbarProps> = (props) => 
  <div>
    <Link to='/'>Home</Link>
    <Link to='/test'>Test</Link>
  </div>

export default Navbar;