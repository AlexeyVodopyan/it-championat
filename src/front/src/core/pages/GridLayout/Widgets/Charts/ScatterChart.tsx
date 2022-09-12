import React, {useEffect, useState} from 'react'
import css from "../../Layout.module.css";
import {Scatter} from "@consta/charts/Scatter";
import {MOCK_DATA_FOR_SCATTER_CHART} from "../__mock__";

export const ScatterChart: React.FC<any> = props => {

    const [data, setData] = useState(MOCK_DATA_FOR_SCATTER_CHART);

    useEffect(() => {

        const intervalId = setInterval(() => {
            const towns = ['Тмутаракань', 'Бобруйск', 'Урюпинск'];
            const newData = [];
            for (let town of towns) {
                for (let i = 0; i < 5; i++) {
                    const temperature = Math.floor(-20 + Math.random() * 40);
                    const ufo = Math.floor(Math.random() * 10);
                    newData.push({ temperature: temperature,  ufo: ufo, place: town});
                }
            }
            setData(newData);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [])

    return <Scatter className={css.chartWidget}
            data={data}
            xField="temperature"
            yField="ufo"
            colorField="place"
            color={['#ffd500', '#82cab2', '#d18768']}
            size={[5, 15]}
            sizeField="ufo"
            shape= 'circle'
            pointStyle= {{
                fillOpacity: 1,
            }}
    />
}