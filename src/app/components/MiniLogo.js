import React from "react";
import './MiniLogo.css';
import { Link } from "react-router-dom";

export function MiniLogo(){
    return(
        <div className='minilogo'>
            <Link to="/">
                <button>
                    <img src='/logo.png' alt='LogoBaja' height="78" width="174"/>
                </button>
            </Link>
        </div>
    );
}