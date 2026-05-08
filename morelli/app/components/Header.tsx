import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <nav className="headerContent">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        {/* <li><a href="#">Links</a></li>  */}
      </ul>
      </nav>
    </header>
  );
}
export default Header;