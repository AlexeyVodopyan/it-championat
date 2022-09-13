import React, {useEffect, useState} from 'react'
import {Radar} from "@consta/charts/Radar";
import css from '../../Layout.module.css';
import {MOCK_DATA_FOR_RADAR_CHART} from "../__mock__";

export const RadarChart: React.FC<any> = props => {

    const [data, setData] = useState(MOCK_DATA_FOR_RADAR_CHART);

    const radarOptions = {
        data: data,
        xField: 'name',
        yField: 'star',
        seriesField: 'user',
        xAxis: {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    style: {
                        lineDash: null,
                    },
                },
            },
        },
        yAxis: {
            line: null,
            tickLine: null,
            grid: {
                line: {
                    type: 'line',
                    style: {
                        lineDash: null,
                    },
                },
            },
        },
        area: {},
        point: {
            size: 2,
        },
        smooth: false,
        meta: {
            star: {
                min: 0,
                nice: true,
            },
        }
    }

    useEffect(() => {

        const intervalId = setInterval(() => {
            const newData = [];
            for (let source of MOCK_DATA_FOR_RADAR_CHART) {
                const target = structuredClone(source);
                target.star = Math.floor(10000 + Math.random() * 90000);
                newData.push(target);
            }
            setData(newData)
        }, 5000);

        return () => clearInterval(intervalId);
    }, [])

    return <Radar className={css.chartWidget} {...radarOptions}/>
}