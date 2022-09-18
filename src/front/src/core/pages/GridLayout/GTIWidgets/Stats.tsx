import React from 'react';
import { Gauge } from '@consta/charts/Gauge'
import {useThemeVars} from '@consta/uikit/useThemeVars';
interface Props {
    offset: number
}

export const Stats: React.FC<Props> = ({offset}) => {
    const vars = useThemeVars()

    const options = {
        percent: 0,
        range: {
            color: vars.color.primary['--color-bg-success'],
        },
        axis: {
            label: {
                formatter(v: any) {
                    return Number(v) * 100
                },
            },
            subTickLine: {
                count: 3,
            },
        },
    }

    return <Gauge {...options} percent={offset/100}/>
};

