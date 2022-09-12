import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import { Responses404 } from '@consta/uikit/Responses404'
import { Main } from '../pages'
import { Contracts } from '../pages/Contracts/Contracts'
import { PagesNames } from './pages'
import { Button } from '@consta/uikit/Button'

export const AppRoutes: React.FC = props => {
  const navigate = useNavigate()
  const onBackClick = () => {
    navigate('/')
  }
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path={`${PagesNames.Tablet}`} element={<Main />} />
        <Route path={`${PagesNames.Contracts}`} element={<Contracts />} />
        <Route path={`*`} element={<Responses404 actions={<Button size="m" view="ghost" label="Домой" onClick={onBackClick} />} />} />
      </Route>
    </Routes>
  )
}
