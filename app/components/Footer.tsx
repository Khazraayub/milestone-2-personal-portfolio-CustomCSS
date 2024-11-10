
"use client";
import React from 'react'
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer style={{ background: "#111827", color: "white", }}>
      <div className="foot">
        <p id="copyright">
           Copyright &copy; 2024 Designed by Khazra Shaikh &#9829; All right Reserved
        </p>
        
        <ul>
            <li className="animate">
              <Link target="_blank"  href={"https://www.linkedin.com/in/khazra-ayub-99b762260/"}>
                <FaLinkedin />
              </Link>
            </li>

            <li className="animate"> 
              <Link target="_blank" href={ "https://github.com/Khazraayub" }>
                <FaGithub />
              </Link>
            </li>

            <li className="animate">
              <Link target="_blank" href={ "#" }>
                <FaSquareFacebook />
              </Link>
            </li>

            <li className="animate">
              <Link target="_blank" href={ "#" }  >
                <MdEmail />
              </Link>
            </li>
          </ul>
        </div>
    </footer>
    </div>
  );
}