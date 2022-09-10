import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../pages/Footer'
import { MainHeader } from '../pages/Header/Header'

const Layout: React.FC = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout