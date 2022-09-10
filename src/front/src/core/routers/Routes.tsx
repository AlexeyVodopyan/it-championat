import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'

import { Main } from '../pages'
import { Contracts } from '../pages/Contracts/Contracts'
import { PagesNames } from './pages'

export const AppRoutes: React.FC = props => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path={`${PagesNames.Tablet}`} element={<Main />} />
        <Route path={`${PagesNames.Contracts}`} element={<Contracts />} />
      </Route>
    </Routes>
  )
}
