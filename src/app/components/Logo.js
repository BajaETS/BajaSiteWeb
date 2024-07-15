import './Logo.css'
import Image from 'next/image';

export function Logo(){
    return(
        <div className='logo'>
            {/* static native image size for proper ratio */}
            <Image src='/logo.png' alt='LogoBaja' width="1740" height="779"/>
        </div>
    );
}