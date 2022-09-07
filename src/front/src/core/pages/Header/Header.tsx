import React from 'react';
import {Header, HeaderModule} from '@consta/uikit/Header'
import {Text} from '@consta/uikit/Text'
import {IconHamburger} from '@consta/uikit/IconHamburger';
import {User} from '@consta/uikit/User';
import css from './header.module.css'
import {IconRing} from "@consta/uikit/IconRing";
import { Button } from '@consta/uikit/Button';

interface Props {

}

export const MainHeader: React.FC<Props> = ({}) => {
  return (
    <Header
      style={{padding: 0}}
      leftSide={
      <HeaderModule>
        <div className={'container align-center'}>
          <Button iconLeft={IconHamburger} view={"clear"} className={css.ringIconMargin}/>
          <Text size={'l'} weight={'bold'}>
            Мониторинг бурения
          </Text>
        </div>
      </HeaderModule>
      }
      rightSide={
        <HeaderModule>
          <div className={'container align-center'}>
            <IconRing size={'m'}  className={css.ringIconMargin}/>
            <User name={'Боб Бобович'} status="available" info={'Стажер'}/>
          </div>
        </HeaderModule>

      }
    />
  );
};
