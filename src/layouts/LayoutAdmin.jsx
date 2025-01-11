import Navbar from '@/components/navbar/Navbar'
import React from 'react'

function LayoutAdmin() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default LayoutAdmin
