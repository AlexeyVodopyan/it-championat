import React, {useEffect, useState} from "react"
import {Waterfall} from "@consta/charts/Waterfall";
import {useThemeVars} from "@consta/uikit/useThemeVars";
import css from "../../Layout.module.css";
import {MOCK_DATA_FOR_WATERFALL_CHART} from "../__mock__";

export const WaterfallChart: React.FC<any> = _ =>  {

    const vars = useThemeVars()

    const [data, setData] = useState(MOCK_DATA_FOR_WATERFALL_CHART);

    useEffect(() => {

        const intervalId = setInterval(() => {
            const newData = [];
            const step = Math.floor(5 + Math.random() * 15);
            for (let i = 0; i < 5; i++) {
                const x = (i + 1) * step;
                const y = Math.floor(-100 + Math.random() * 250);
                const item = { x: x.toString(), y: y};
                newData.push(item);
            }
            setData(newData);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);


    return <div className={css.chartWidget}>
        <Waterfall style={{'width': '100%'}}
            data={data}
            xField="x"
            yField="y"
            legend={{
                layout: 'horizontal',
                position: 'top-left',
                marker: {
                    symbol: 'square',
                },
            }}
            risingFill={vars.color.primary['--color-bg-success']}
            fallingFill={vars.color.primary['--color-bg-alert']}
            total={{
                style: {
                    fill: vars.color.primary['--color-bg-system'],
                },
            }}
            yAxis={{
                grid: {
                    line: {
                        style: {
                            lineDash: null,
                            stroke: vars.color.primary['--color-bg-system'],
                        }
                    }
                },
            }}
        />
    </div>
}