import Link from "next/link";
import "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <Link href={"/"}>About</Link>
      <Link href={"projects"}>Projects</Link>
      <Link href={"contact"}>Contact</Link>
    </nav>
  );
}

export default Navbar;
