import React from 'react';
import css from './Main.module.css'
import {GridLayout} from "./GridLayout/GridLayout";
import {GtiLayout} from './GridLayout/GTILayout';
interface Props {

}

export const Main: React.FC<Props> = ({}) => {
  return (
    <div className={css.container}>
      {/*<GridLayout />*/}
        <GtiLayout/>
    </div>
  );
};

