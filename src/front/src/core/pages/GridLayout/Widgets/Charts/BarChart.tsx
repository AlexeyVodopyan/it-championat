import React from 'react'
import css from '../../Layout.module.css'
import {Bar} from '@consta/charts/Bar'
import {MOCK_DATA_FOR_BAR_CHART} from '../__mock__'

interface IBarChartProps {

}

export const BarChart: React.FC<IBarChartProps> = props => {
    return <div className={css.chartWidget}>
        <Bar
            style={{ overflow: 'hidden', width: '100em'}}
            data={MOCK_DATA_FOR_BAR_CHART}
            label={{position: 'middle'}}
            xField="number"
            yField="parameter"
        />
    </div>;
};
