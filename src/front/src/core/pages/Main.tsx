import React from 'react';
import css from './Main.module.css'
import {GridLayout} from "./GridLayout/GridLayout";
interface Props {

}

export const Main: React.FC<Props> = ({}) => {
  return (
    <div className={css.container}>
      <GridLayout />
    </div>
  );
};

