import { Link } from 'react-router-dom';


function Header({ isVisible, onMouseEnter }) {
  return (
    <header className="header"
      style={{ backgroundColor: isVisible ? "#dbc1ac" : "white" }}>
      <nav className="headerContent">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        {/* <li><a href="#">Links</a></li>  */}
      </ul>
      </nav>
    </header>
  );
}
export default Header;