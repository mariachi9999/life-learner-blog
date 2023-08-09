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
    <div id={""} className={""}>
      <div className="">Made with love 💛</div>
      <div className="">
        <nav>
          <ul className="">
            <li>
              <Link href={`https://twitter.com/`} target="_blank" className="">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href={`https://instagram.com/`}
                target="_blank"
                className=""
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href={`https://facebook.com/`} target="_blank" className="">
                <FaSquareFacebook />
              </Link>
            </li>
            <li>
              <Link href={`https://linkedin.com/`} target="_blank" className="">
                <FaLinkedin />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
