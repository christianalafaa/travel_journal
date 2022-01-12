import React from 'react'
import { FaGlobeAmericas } from 'react-icons/fa/index.esm'

function Nav() {
    return (
        <nav>
            <FaGlobeAmericas className="nav--icon" /><span className='nav--text'>my travel journal.</span>
        </nav>
    )
}

export default Nav
