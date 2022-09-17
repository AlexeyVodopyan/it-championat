import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../pages/Footer'
import { MainHeader } from '../pages/Header/Header'
import css from './Layout.module.css'
import {usersType} from '../api/api.types';

const Layout: React.FC = () => {
    const [user, setUser] = React.useState<usersType>();
    return (
        <>
            <MainHeader setUser={setUser} user={user}/>
            <div className={css.outletContainer}>
                <Outlet context={user}/>
            </div>
            <Footer />
        </>
    )
}

export default Layout
