import React from "react"
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {


    return (
        <header className={styles.header}>
            <nav>
                <Link to="/login">
                    <button className={styles.login_btn}>Login/Sign-up</button>
                </Link>
            </nav>
            <Link className={styles.site_name_link} to="/homeScreen">
                <h1 className={styles.site_name}>Vault Keep</h1>
            </Link>
            <nav>
                <Link className={styles.header_btns} to="">
                    <button className={styles.home_btn}>Home</button>
                </Link>
                <Link className={styles.header_btns} to="/collection">
                    <button className={styles.collection_btn}>Collection</button>
                </Link>  
                <Link className={styles.header_btns} to="/bookshelf"> 
                    <button className={styles.bookshelf_btn}>Bookshelf</button>
                </Link> 
            </nav>
        </header>
    )
}

export default Header;