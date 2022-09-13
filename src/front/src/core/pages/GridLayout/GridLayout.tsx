import React from 'react'
import {Responsive, WidthProvider} from "react-grid-layout";
import {Text} from '@consta/uikit/Text'
import {Block} from "./Block";
import {ColumnChart} from "./Widgets/Charts/ColumnChart";
import {AreaChart} from "./Widgets/Charts/AreaChart";
import {BarChart} from "./Widgets/Charts/BarChart";
import {BarStackChart} from "./Widgets/Charts/BarStackChart";
import {BarGroupChart} from "./Widgets/Charts/BarGroupChart";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import css from './Layout.module.css'
import {ScatterChart} from "./Widgets/Charts/ScatterChart";
import {WaterfallChart} from "./Widgets/Charts/WaterfallChart";

interface IGridLayoutProps {

}
const ResponsiveReactGridLayout = WidthProvider(Responsive)
export const GridLayout: React.FC<IGridLayoutProps> = ({}) => {
  const layout = [
    { i: "waterfallChart", x: 0, y: 0, w: 1, h: 2},
    { i: "scatterChart", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2},
    { i: "d", x: 4, y: 0, w: 1, h: 2},
    { i: "columnChart", x: 0, y: 1, w: 2, h: 2},
    { i: "areaChart", x: 0, y: 1, w: 2, h: 2},
    { i: "barChart", x: 0, y: 1, w: 1, h: 2},
    { i: "barStackChart", x: 0, y: 1, w: 1, h: 2},
    { i: "barGroupChart", x: 0, y: 1, w: 1, h: 2},
  ];
  return (
    <div className={css.mainContainer}>
      <ResponsiveReactGridLayout
        className="layout"
        layouts={{md: layout}}
        onLayoutChange={(Layout, allLayouts) => console.log('L26  === тут сохранение в локал стор', Layout, allLayouts)}
      >
        <div key="waterfallChart" className={css.widgetContainer}>
          <Text size={'s'}>Каскадная диаграмма</Text>
          <WaterfallChart/>
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

