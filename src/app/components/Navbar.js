import './Navbar.css'
import {Logo} from'./Logo'

export function Navbar(){
    return(
        <nav id="navbar">
            <div> 
                <Logo />
            </div>
            <ul>
                <li>
                <a href="/pages/whatwedo.html">What We Do</a>
                </li>
                <li>
                <a href="/pages/fundraisingevent.html">Fundraising Event</a>
                </li>
                <li>
                <a href="/pages/team.html">Team</a>
                </li>
                <li>
                <a href="/pages/prizes.html">Prizes</a>
                </li>
                <li>
                <a href="/pages/partners.html">Partners</a>
                </li>
                <li>
                <a href="/pages/history.html">History</a>
                </li>
            </ul>
        </nav>
    );
}