import './Logo.css'
import Image from 'next/image';

export function Logo(){
    return(
        <div className='logo'>
            <Image src='/logo.png' alt='LogoBaja' fill={true}/>
        </div>
    );
}