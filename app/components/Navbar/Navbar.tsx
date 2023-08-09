import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={""}>
      <nav className={""}>
        <ul>
          <li className={""}>
            <Link href={`/`}>Home</Link>
          </li>
          <li className={""}>
            <Link href={`/about`}>About</Link>
          </li>
          <li className={""}>
            <Link href={`/contact`}>Contact</Link>
          </li>
          <li className={""}>
            <Link href={`/posts`}>Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
