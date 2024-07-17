import React, {useState,useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'

export function Navbar(){
    const [isHamburger, setHamburger] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    function handleResize(){
        if(window.innerWidth <= 500){
            setHamburger(true);
        }else{
            setHamburger(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            {!isHamburger && (
                <nav id="navbar">
                    <ul>
                        <li>
                            <Link to="/whatwedo">What We Do</Link>
                        </li>
                        <li>
                            <Link to="/fundraiser">Fundraiser</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/prizes">Prizes</Link>
                        </li>
                        <li>
                            <Link to="/partners">Partners</Link>
                        </li>
                        <li>
                            <Link to="/history">History</Link>
                        </li>
                    </ul>
                </nav>
            )}
            {isHamburger && (
                <button id="hamburger" onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
                    <img src="/hamburger.png" width="25" height="25"></img>
                </button>
            )}
        </>
    );
}