import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import DropdownListMenu from './DropdownListMenu'

function Navbar() {
    return (
        <nav>
            <div className='flex flex-col sm:flex-row justify-between items-center py-4 px-8'>
                <Logo />
                <SearchBar />
                <DropdownListMenu />
            </div>
            <hr />
        </nav>

    )
}

export default Navbar