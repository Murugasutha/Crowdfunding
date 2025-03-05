import React, { useEffect, useState } from 'react';
import styles from '../components/style/Navbar.module.css'; // Ensure correct path
import logo_light from '../assets/logo-black.png';
import logo_dark from '../assets/logo-white.png';
// import search_icon_light from '../assets/search-w.png';
// import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';

function Navbar({theme, setTheme}) {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, [])

    return (
        <>
            <nav className={`${styles.navbar} ${sticky? styles.darknav : ''} ${theme === 'dark' ? styles.dark : ''}`}>

                <img src={theme == 'light' ? logo_light : logo_dark} alt="" className={styles.logo} />
                <ul>
                    <li>Home</li>
                    <li>Campaigns</li>
                    <li>Discover</li>
                    <li>About us</li>
                    <li>Conduct us</li>
                    <li>
                        <button type="button" className={styles.loginbtn}>Log In</button>
                    </li>
                    <li>
                        <button type="button" className={styles.btn}>Sign Up</button>
                    </li>
                </ul>

                {/* <div className={styles['search-box']}>
                    <input type="text" placeholder="Search" className="" />
                    <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" className="" />
                </div> */}


                <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className={styles['toggle-icon']} />
            </nav>
        </>
    );
}

export default Navbar;