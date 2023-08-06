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

function Footer() {
  return (
    <div
      id="footer"
      className={`flex relative bottom-0 left-0 w-full bg-gray-100 p-4 h-1/5 justify-around`}
    >
      <div className="flex items-center m-4">Made with love 💛</div>
      <div className="flex items-center m-4">
        <nav>
          <ul className="list-none flex">
            <li>
              <Link
                href={`https://twitter.com/`}
                target="_blank"
                className="p-2 mx-4"
              >
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link
                href={`https://instagram.com/`}
                target="_blank"
                className="p-2 mx-4"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href={`https://facebook.com/`}
                target="_blank"
                className="p-2 mx-4"
              >
                <FaSquareFacebook />
              </Link>
            </li>
            <li>
              <Link
                href={`https://linkedin.com/`}
                target="_blank"
                className="p-2 mx-4"
              >
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
