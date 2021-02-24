import React from 'react'

function Navbar() {
    return (
        <nav className='menu-area'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Page 1</a></li>
                <li><a href="/" className='logo'>Logo</a></li>
                <li><a href="/">Page2</a></li>
                <li><a  href="/">Dropdown ▾</a>
                    <ul className='dropdown'>
                        <li><a href="/">prvi</a></li>
                        <li><a href="/">drugi</a></li>
                        <li><a href="/">treci</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
