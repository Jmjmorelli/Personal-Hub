import Link from "next/link";

function Header() {
  return (
    <header>
      <nav >
        <ul style={{
          position: "sticky",
          top: "0",
          display: "flex",
          flexDirection: "row-reverse",
          gap: ".5rem",
          justifyContent: "space-between"
        }}>
          <div style={{display: "flex", flexDirection: "row", gap: ".5rem"}}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="https://files.morellijoseph.com/">Photos</Link></li>
            <li><Link href="/logs">Logs</Link></li>
          </div>
          <div style={{ flexDirection: "row" }}>
            <li><Link href="/"><span style={{ fontWeight: "bold" }}>JOSEPH</span> <span style={{ color: "#ae774fff", fontWeight: "bold" }}>MORELLI</span></Link></li>
          </div>
          {/* <li><a href="#">Links</a></li>  */}
          
        </ul>
      </nav>
    </header>
  );
}
export default Header;