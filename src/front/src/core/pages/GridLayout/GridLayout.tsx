import React from 'react'
import {Responsive, WidthProvider} from "react-grid-layout";
import {Block} from "./Block";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import css from './Layout.module.css'

interface IGridLayoutProps {

}
const ResponsiveReactGridLayout = WidthProvider(Responsive)
export const Layout: React.FC<IGridLayoutProps> = ({}) => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2},
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2},
    { i: "d", x: 4, y: 0, w: 1, h: 2}
  ];
  return (
    <div className={css.mainContainer}>
      <ResponsiveReactGridLayout
        className="layout"
        layouts={{md: layout}}
        onLayoutChange={(Layout, allLayouts) => console.log('L26  === тут сохранение в локал стор', Layout, allLayouts)}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
        <div key={'d'} className={css.widgetContainer}>
          <Block />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
};

