"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaSquareFacebook,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";

import { BiLogoGmail } from "react-icons/bi";

import styles from "./footer.module.css";

function Footer() {
  return (
    <div id={""} className={styles.footerContainer}>
      <div className={styles.left}></div>
      <div className={styles.center}>Made with love 💛</div>
      <div className={styles.right}>
        <div className={styles.logo}>
          <Link href={`https://twitter.com/`} target="_blank" className="">
            <FaTwitter />
          </Link>
        </div>
        <div className={styles.logo}>
          <Link href={`https://instagram.com/`} target="_blank" className="">
            <FaInstagram />
          </Link>
        </div>
        <div className={styles.logo}>
          <Link href={`https://facebook.com/`} target="_blank" className="">
            <FaSquareFacebook />
          </Link>
        </div>
        <div className={styles.logo}>
          <Link href={`https://linkedin.com/`} target="_blank" className="">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
