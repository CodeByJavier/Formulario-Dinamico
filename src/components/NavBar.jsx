import './NavBar';
import reactLogo from '../assets/react.svg';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav-bar">
      <h3>AppUsers</h3>
      <ul>
        <li><Link to="">Usuarios</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
      <div className='logo'>
        <img src={reactLogo} className="react" alt="React logo" />
      </div>

    </div>
  );
}