import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../pages/Footer'
import { MainHeader } from '../pages/Header/Header'
import css from './Layout.module.css'

const Layout: React.FC = () => {
    return (
        <>
            <MainHeader />
            <div className={css.outletContainer}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout