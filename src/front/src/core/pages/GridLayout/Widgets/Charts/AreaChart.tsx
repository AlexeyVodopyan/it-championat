import React from 'react'
import css from '../../Layout.module.css'
import {Area} from '@consta/charts/Area'
import {MOCK_DATA_FOR_AREA_CHART} from '../__mock__'

interface IAreaChartProps {

}

export const AreaChart: React.FC<IAreaChartProps> = props => {
    return <div className={css.chartWidget}>
        <Area
            style={{
                overflow: 'hidden',
                width: '100em'
            }}
            data={MOCK_DATA_FOR_AREA_CHART}
            xField="date"
            yField="value"
            seriesField="groupName"
            slider={{
                start: 0,
                end: 0.5,
            }}
        />
    </div>;
};
