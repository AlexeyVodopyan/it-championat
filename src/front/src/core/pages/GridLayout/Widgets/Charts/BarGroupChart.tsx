import React from 'react'
import css from '../../Layout.module.css'
import {Bar} from '@consta/charts/Bar'
import {MOCK_DATA_FOR_BAR_GROUP_CHART} from '../__mock__'

interface IBarGroupChartProps {

}

export const BarGroupChart: React.FC<IBarGroupChartProps> = props => {
    return <Bar className={css.chartWidget}
            data={MOCK_DATA_FOR_BAR_GROUP_CHART}
            label={{position: 'middle'}}
            isGroup
            xField="number"
            yField="parameter"
            seriesField="groupName"
    />;
};
