import Image from "next/image"
import React from "react"
import Head from "next/head";
import Link from "next/link"
import styles from "../styles/Navbar.module.css"
function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav className="navbar navbar-expand-sm navbar-light ">
        <div className="container-fluid ps-2 pe-2 ms-3 me-3 ">
           <Image src="/images/logo.png" width="80px" height="50px"  alt="logo"/> 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse` }
            id="navbarSupportedContent"
          >
            <div className={styles.nav_inner2}>
             
                <ul className="navbar-nav ml-auto me-auto  mb-lg-0">
                  <li className={`nav-item`}>
                  <Link href="/">
                      <a  className={ styles.items }>
                      Home
                    </a>
                    </Link>
                  </li>
                  <li className={ `nav-item`}>
                  <Link href="/about">
                      <a  className={ styles.items }>
                      Search Appartment
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item" >
                  <Link href="/about">
                    <a  className={ styles.items }>
                      About
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link href="/contact">
                    <a className={ styles.items } >
                      Contact
                    </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                    <a className={ styles.items } >
                     Our Stories
                    </a>
                    </Link>
                   
                  </li>

                 
                </ul>

              </div>
            </div>
       
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
