import React from 'react'
import css from '../../Layout.module.css'
import {Bar} from '@consta/charts/Bar'
import {MOCK_DATA_FOR_BAR_STACK_CHART} from '../__mock__'

interface IBarStackChartProps {

}

export const BarStackChart: React.FC<IBarStackChartProps> = props => {
    return <div className={css.chartWidget}>
        <Bar
            style={{ overflow: 'hidden', width: '100em'}}
            data={MOCK_DATA_FOR_BAR_STACK_CHART}
            label={{position: 'middle'}}
            isStack
            xField="number"
            yField="parameter"
            seriesField="groupName"
        />
    </div>;
};
