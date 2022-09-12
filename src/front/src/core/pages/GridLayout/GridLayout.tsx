import React from 'react'
import {Responsive, WidthProvider} from "react-grid-layout";
import {Block} from "./Block";
import {ColumnChart} from "./Widgets/Charts/ColumnChart";
import {AreaChart} from "./Widgets/Charts/AreaChart";
import {BarChart} from "./Widgets/Charts/BarChart";
import {BarStackChart} from "./Widgets/Charts/BarStackChart";
import {BarGroupChart} from "./Widgets/Charts/BarGroupChart";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import css from './Layout.module.css'

interface IGridLayoutProps {

}

const defaultLayout = [
  { i: "columnChart", x: 0, y: 0, w: 2, h: 2},
  { i: "areaChart", x: 2, y: 0, w: 2, h: 2},
  { i: "barChart", x: 4, y: 0, w: 2, h: 2},
  { i: "barStackChart", x: 0, y: 2, w: 2, h: 2},
  { i: "barGroupChart", x: 2, y: 2, w: 2, h: 2},
  { i: "a", x: 4, y: 2, w: 1, h: 1},
  { i: "b", x: 5, y: 2, w: 1, h: 1},
  { i: "c", x: 4, y: 3, w: 1, h: 1},
  { i: "d", x: 5, y: 3, w: 1, h: 1},
]

const ResponsiveReactGridLayout = WidthProvider(Responsive)
export const GridLayout: React.FC<IGridLayoutProps> = ({}) => {
  const layoutStr = localStorage.getItem ("layout")
  const layout = layoutStr
      ? JSON.parse(layoutStr!)
      : defaultLayout;

  return (
    <div className={css.mainContainer}>
      <ResponsiveReactGridLayout
        className="layout"
        layouts={{lg: layout}}
        onLayoutChange={(Layout, allLayouts) => localStorage.setItem ("layout", JSON.stringify(Layout))}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
        <div key={'d'} className={css.widgetContainer}>
          <Block />
        </div>
        <div key={'columnChart'} className={css.widgetContainer}>
          <ColumnChart />
        </div>
        <div key={'areaChart'} className={css.widgetContainer}>
          <AreaChart />
        </div>
        <div key={'barChart'} className={css.widgetContainer}>
          <BarChart />
        </div>
        <div key={'barStackChart'} className={css.widgetContainer}>
          <BarStackChart />
        </div>
        <div key={'barGroupChart'} className={css.widgetContainer}>
          <BarGroupChart />
        </div>
      </ResponsiveReactGridLayout>
    </div>
  );
};

