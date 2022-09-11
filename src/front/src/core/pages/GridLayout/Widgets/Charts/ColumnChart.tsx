import React from 'react'
import css from '../../Layout.module.css'
import {Column} from '@consta/charts/Column'
import {MOCK_DATA_FOR_COLUMN_CHART} from '../__mock__'

interface IColumnChartProps {

}

export const ColumnChart: React.FC<IColumnChartProps> = props => {
    return <div className={css.chartWidget}>
        <Column
            style={{
                overflow: 'hidden',
                width: '100em'
            }}
            data={MOCK_DATA_FOR_COLUMN_CHART}
            xField="parameter"
            yField="number"
        />
    </div>;
};
