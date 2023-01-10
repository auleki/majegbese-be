import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='px-4'>
            < Navbar />
            {children}
        </div >
    )
}

export default Layout