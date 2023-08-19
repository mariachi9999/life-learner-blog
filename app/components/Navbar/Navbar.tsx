"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { FaBars } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import logo from "../../../public/images/life-logo.jpeg";

function Navbar() {
  const [isOpen, setShow] = useState(false);

  const showMobileMenu = ({ isOpen }: { isOpen: any }) => {
    isOpen == true ? setShow(false) : setShow(true);
    console.log(isOpen);
  };

  // useEffect(() => {
  //   show == true ?

  // }, [show])

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogoContainer}>
        <Image className={styles.navbarLogo} alt="logo" src={logo} />
      </div>
      <div
        className={
          isOpen === true ? styles.menu + " " + styles.show : styles.menu
        }
      >
        <Link href={`/`}>Home</Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/contact`}>Contact</Link>
        <Link href={`#search`}>
          <AiOutlineSearch />
        </Link>
      </div>
      <div
        className={styles.mobileMenu}
        onClick={() => showMobileMenu({ isOpen })}
      >
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;
