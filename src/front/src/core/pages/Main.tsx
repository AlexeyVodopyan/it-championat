import React from 'react';
import {MainHeader} from './Header/Header';
import css from './Main.module.css'
import {Footer} from "./Footer";
import {Layout} from "./GridLayout";
interface Props {

}

export const Main: React.FC<Props> = ({}) => {
  return (
    <div className={css.container}>
      <MainHeader/>
      <Layout />
      <Footer />
    </div>
  );
};

