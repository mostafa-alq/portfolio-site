import Link from "next/link";
import "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <Link href="">About</Link>
      <Link href="#contact">Projects</Link>
      <Link href="#touch">Contact</Link>
    </nav>
  );
}

export default Navbar;
