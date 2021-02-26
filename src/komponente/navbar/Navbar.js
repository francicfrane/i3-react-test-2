import React from 'react'

function Navbar() {
    return (
        <nav className='menu-area'>
            <ul>
                <li><div className='link'>Home</div></li>
                <li><div className='link'>Page 1</div></li>
                <li><div className='logo link'>Logo</div></li>
                <li><div className='link'>Page2</div></li>
                <li><div className='link'>Dropdown ▾</div>
                    <ul className='dropdown'>
                        <li><div className='link'>prvi</div></li>
                        <li><div className='link'>drugi</div></li>
                        <li><div className='link'>treci</div></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
