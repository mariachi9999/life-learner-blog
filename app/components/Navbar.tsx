import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex h-1/5 items-center justify-center  bg-gray-100">
      <nav className="flex justify-around">
        <ul>
          <li className="inline p-4">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="inline p-4">
            <Link href={`/about`}>About</Link>
          </li>
          <li className="inline p-4">
            <Link href={`/contact`}>Contact</Link>
          </li>
          <li className="inline p-4">
            <Link href={`/posts`}>Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
