import React from 'react'
import css from '../../Layout.module.css'
import {Column} from '@consta/charts/Column'
import {MOCK_DATA_FOR_COLUMN_CHART} from '../__mock__'

interface IColumnChartProps {

}

export const ColumnChart: React.FC<IColumnChartProps> = props => {
    return <Column className={css.chartWidget}
            data={MOCK_DATA_FOR_COLUMN_CHART}
            xField="parameter"
            yField="number"
    />;
};
