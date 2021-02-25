import React from 'react'

function Navbar() {
    return (
        <nav className='menu-area'>
            <ul>
                <li><div>Home</div></li>
                <li><div>Page 1</div></li>
                <li><div className='logo'>Logo</div></li>
                <li><div>Page2</div></li>
                <li><div>Dropdown ▾</div>
                    <ul className='dropdown'>
                        <li><div>prvi</div></li>
                        <li><div>drugi</div></li>
                        <li><div>treci</div></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
