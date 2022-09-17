import React, {useEffect, useState} from 'react'
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
import {RadarChart} from "./Widgets/Charts/RadarChart";
import { LineChart } from './GTIWidgets/LineChart';

interface IGridLayoutProps {

}

const defaultLayout = [
    {i: "columnChart", x: 0, y: 0, w: 1, h: 4},
    {i: "areaChart", x: 1, y: 0, w: 5, h: 2},
    {i: "scatterChart", x: 1, y: 3, w: 2, h: 2},
    {i: "waterfallChart", x: 3, y: 3, w: 2, h: 2},
    {i: "radarChart", x: 6, y: 0, w: 3, h: 3},
    {i: "barChart", x: 5, y: 3, w: 1, h: 1},
    {i: "barStackChart", x: 5, y: 4, w: 4, h: 1},
    {i: "barGroupChart", x: 9, y: 0, w: 2, h: 4},
    { i: "LineChart", x: 3, y: 0, w: 7, h: 5},
]

const ResponsiveReactGridLayout = WidthProvider(Responsive)
export const GridLayout: React.FC<IGridLayoutProps> = ({}) => {

    const [layout, setData] = useState(defaultLayout);

    useEffect(() => {
        const layoutStr = localStorage.getItem("layout")
        setData(layoutStr
            ? JSON.parse(layoutStr!)
            : defaultLayout);
    }, [])

    return (
        <div className={css.mainContainer}>
            <ResponsiveReactGridLayout
                className="layout"
                layouts={{lg: layout}}
                onLayoutChange={(Layout, allLayouts) => localStorage.setItem("layout", JSON.stringify(Layout))}
            >
                <div key="waterfallChart" className={css.widgetContainer}>
                    <Text size={'s'}>Каскадная диаграмма</Text>
                    <WaterfallChart/>
                </div>
                <div key="scatterChart" className={css.widgetContainer}>
                    <Text size={'s'}>Диаграмма рассеивания</Text>
                    <ScatterChart/>
                </div>
                <div key="radarChart" className={css.widgetContainer}>
                    <Text size={'s'}>Радарная диаграмма</Text>
                    <RadarChart/>
                </div>
                <div key={'columnChart'} className={css.widgetContainer}>
                    <Text size={'s'}>Столбчатая диаграмма</Text>
                    <ColumnChart/>
                </div>
                <div key={'areaChart'} className={css.widgetContainer}>
                    <Text size={'s'}>Диаграмма областей</Text>
                    <AreaChart/>
                </div>
                <div key={'barChart'} className={css.widgetContainer}>
                    <Text size={'s'}>Столбчатая диаграмма (гор.)</Text>
                    <BarChart/>
                </div>
                <div key={'barStackChart'} className={css.widgetContainer}>
                    <Text size={'s'}>Столбчатая диаграмма (гор.) с накоплением</Text>
                    <BarStackChart/>
                </div>
                <div key={'barGroupChart'} className={css.widgetContainer}>
                    <Text size={'s'}>Столбчатая диаграмма (гор.) с группировкой</Text>
                    <BarGroupChart/>
                </div>
            </ResponsiveReactGridLayout>
        </div>
    );
};

