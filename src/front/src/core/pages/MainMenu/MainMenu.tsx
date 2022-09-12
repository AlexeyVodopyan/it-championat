import { Button } from "@consta/uikit/Button";
import React from "react";
import { Sidebar } from '@consta/uikit/Sidebar';
import { Text } from '@consta/uikit/Text';
import css from './MainMenu.module.css';
import { IconClose } from '@consta/uikit/IconClose';
import { useNavigate } from "react-router-dom";
import { PagesNames } from "../../routers/pages";
interface Props { 
  isSidebarOpen: boolean 
  onMenuClose: () => void
}

export const MainMenu: React.FC< Props > = ({isSidebarOpen, onMenuClose}) => {
    const navigation = useNavigate()

    const toGTIPage = () => {
      navigation(`/${PagesNames.GTI}`, { replace: true }) 
      onMenuClose()
    }

    const toEquipmentPage = () => {
      navigation(`/${PagesNames.Equipment}`, { replace: true }) 
      onMenuClose()
    }

    const toContractPage = () => {
      navigation(`/${PagesNames.Contracts}`, { replace: true }) 
      onMenuClose()
    }

    return (
      <div className={css.section}>
        <Sidebar
          className={'sidebar'}
          isOpen={isSidebarOpen}
          onClickOutside={onMenuClose}
          onEsc={onMenuClose}
          hasOverlay={false}
          position={'left'}
          size="l"
        >
          <Sidebar.Content className={css.content}>
            <div className={css.menupar}>
              <Text className={css.title}
                as="p"
                size="l"
                view="primary"
                weight="semibold"
                align="center"
                lineHeight="l"
              >
                Меню                  
              </Text>
          
              <Button 
                size="m"
                view="clear" 
                iconLeft={IconClose} onlyIcon
                onClick={onMenuClose}
              />
          </div>
          <hr />  

          <div 
            className={css.groupButton}>    
            <Text  
              className={css.button}
              size="l"
              onClick={toGTIPage}>
              Планшеты ГТИ
            </Text>

            <Text  
              className={css.button}
              size="l"
              onClick={toEquipmentPage}>
              Реестр оборудования
            </Text>

            <Text  
              className={css.button}
              size="l"
              onClick={toContractPage}>
              Реестр договоров
            </Text>

            </div>
          </Sidebar.Content>

        </Sidebar>
      </div>
    );
  };