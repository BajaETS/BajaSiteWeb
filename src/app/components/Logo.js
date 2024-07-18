import React, {useState, useEffect} from 'react';
import './Logo.css'
import Image from 'next/image';

export function Logo(){
    const nativeWidth = 1740;
    const nativeHeight = 779;
    const WHRatio = nativeWidth/nativeHeight;

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth/3,
        height: (window.innerWidth/3) / WHRatio
    });
    
    function handleResize(){
        setDimensions({
            width: window.innerWidth/3,
            height: (window.innerWidth/3) / WHRatio
        });
    } 

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    
    return(
        <div className='logo'>
            <Image src='/logo.png' alt='LogoBaja' width={dimensions.width} height={dimensions.height}/>
        </div>
    );
}