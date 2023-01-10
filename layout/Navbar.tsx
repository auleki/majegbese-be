import React from 'react'
import Button from '../components/atoms/Button'
import Logo from '../components/brand/Logo'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-4'>
            <Logo />
            {/* <Button text='Not Paid' onClick={() => { }} /> */}
            <span>MENU</span>
        </nav>
    )
}

export default Navbar