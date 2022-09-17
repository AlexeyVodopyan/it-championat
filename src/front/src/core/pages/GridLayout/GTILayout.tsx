import React, {useState} from 'react'
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
import {Stats} from './GTIWidgets/Stats';
import { Notes } from './GTIWidgets/Notes';
import {AlarmComponents} from './GTIWidgets/AlarmComponents';
import {GtiChart} from './GTIWidgets/GTIChart';
import {DrillingInfo} from './GTIWidgets/DrillingInfo';
import {Chat} from './GTIWidgets/Chat';
import {getUsers} from '../../api';
import {login} from '../../api/CalculateService';

interface IGridLayoutProps {

}
const ResponsiveReactGridLayout = WidthProvider(Responsive)
interface Props {

}

export const GtiLayout: React.FC<Props> = ({}) => {
    const [offset, setOffset]  = useState(0)
    const layout = [
        { i: "LineChart", x: 0, y: 0, w: 6, h: 4},
        { i: "DrillingInfo", x: 6, y: 0, w: 2, h: 4},
        { i: "DrillingChart", x: 8, y: 0, w: 4, h: 4},

        { i: "stats", x: 3, y: 2, w: 2, h: 2},
        { i: "Notes", x: 5, y: 2, w: 2, h: 2},
        { i: "Alarm", x: 0, y: 2, w: 3, h: 2},
        { i: "Chat", x: 8, y: 2, w: 5, h: 2},

    ];
    return (
        <div className={css.mainContainer}>
            <ResponsiveReactGridLayout
                className="layout"
                layouts={{ lg: layout}}
                onLayoutChange={(Layout, allLayouts) => console.log('L26  === тут сохранение в локал стор', Layout, allLayouts)}
            >
                <div key={'LineChart'} className={css.widgetContainer}>
                    <Text size={'s'}>Линейная диаграмма</Text>
                    <GtiChart chartsNumber={8} onChangeLine={() => {}} division={100}/>
                </div>
                <div key={'DrillingInfo'} className={css.widgetContainer}>
                    <Text size={'s'}>Информация о ходе бурения</Text>
                    <DrillingInfo/>
                </div>
                <div key={'DrillingChart'} className={css.widgetContainer}>
                    <Text size={'s'}>Траектория скважины</Text>
                    <LineChart onChangeLine={setOffset} division={50}/>
                </div>
                <div key="Alarm" className={css.widgetContainer}>
                    <Text size={'s'}>Предупреждения о выходах за ограничения</Text>
                    <AlarmComponents />
                </div>
                <div key="stats" className={css.widgetContainer}>
                    <Text size={'s'}>Отклонение траектории</Text>
                    <Stats offset={offset}/>
                </div>
                <div key="Notes" className={css.widgetContainer}>
                    <Text size={'s'}>Заметки</Text>
                    <Notes />
                </div>
               <div key="Chat" className={css.widgetContainer}>
                    <Text size={'s'}>Чат</Text>
                    <Chat />
                </div>


            </ResponsiveReactGridLayout>
        </div>
    )
};

