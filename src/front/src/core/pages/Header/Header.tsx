import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';
import {Header, HeaderModule} from '@consta/uikit/Header'
import {Text} from '@consta/uikit/Text'
import {IconHamburger} from '@consta/uikit/IconHamburger';
import css from './header.module.css'
import { Button } from '@consta/uikit/Button';
import { MainMenu } from '../MainMenu';
import {getUsers} from '../../api';
import {usersType} from '../../api/api.types';
import {UserSelect} from '@consta/uikit/UserSelect';
import {login} from '../../api/CalculateService';

interface Props {
    user?: usersType
    setUser: React.Dispatch<SetStateAction<usersType | undefined>>
}

export const MainHeader: React.FC<Props> = ({setUser, user}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [users, setUsers] = React.useState<usersType[]>([]);
  useEffect(() => {
      getUsers().then(res => {
          setUser(res[0])
          setUsers(res)
          login(res[0].email, 12345678).then(res => {
              localStorage.setItem('token', res.access_token)
          })
      })
  }, [])
  const onMenuOpen =  () => {
    setIsSidebarOpen(true)
  }
  const onMenuClose =  () => {
    setIsSidebarOpen(false)
  }
  return (
    <>
    <Header
      style={{padding: 0}}
      leftSide={
      <HeaderModule>
        <div className={'container align-center'}>
          <Button iconLeft={IconHamburger} view={"clear"} className={css.ringIconMargin} onClick={onMenuOpen}/>
          <Text size={'l'} weight={'bold'}>
            Мониторинг бурения
          </Text>
        </div>
      </HeaderModule>
      }
      rightSide={
          <HeaderModule indent="s" className={'m-r-6'}>
              <UserSelect
                  placeholder="Это подсказка"
                  getItemLabel={item => item.name}
                  items={users}
                  value={user}
                  onChange={({ value }) => {
                      if (value) {
                          login(value.email, 12345678).then(res => {
                              localStorage.setItem('token', res.access_token)
                              setUser(value)
                          })
                      }
                  }}
              />
          </HeaderModule>
      }
    />
    <MainMenu onMenuClose={onMenuClose} isSidebarOpen={isSidebarOpen} />
    </>
  );
};

