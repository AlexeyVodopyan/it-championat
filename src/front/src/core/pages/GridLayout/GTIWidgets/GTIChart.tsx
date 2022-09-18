import React, {useEffect, useMemo, useState} from 'react';
import {Line} from '@consta/charts/Line'
interface Props {
    onChangeLine: (arg: number) => void
    division: number
    chartsNumber: number
}



export const GtiChart: React.FC<Props> = ({onChangeLine, division, chartsNumber}) => {
    const [data, setData]  = useState<any[]>([])
    const data1 = useMemo(() => {
        return Array.from({length: division}).map((_, index) => ({
            year: index,
            value: 0
        }))
    }, [])
    useEffect(() => {
        let timers: NodeJS.Timer[] = []
        Array.from({length: chartsNumber}).map((_, index) => {
            let i = 0
            let count = 0

            const interval = setInterval(() => {
                let newData = {
                    country:  'United Kingdom' + index,
                    year: randomIntFromInterval(9*(index+1), 10*(index+1)),
                    value: count
                }
                i++
                const offset = randomIntFromInterval(1, 20)
                onChangeLine(offset)

                count = count - 0.25
                setData(prev => [...prev, newData].sort((a, b) => {
                    if(a.value > b.value)
                        return 1
                    if(a.value < b.value)
                        return  -1
                    return 0
                }))
            }, 2000)
            console.log(interval)
            timers.push(interval)
        })
        console.log('timers',timers)
        return () => {
            timers.forEach(timer => clearInterval(timer))
        }
    },[])


    return <Line data={[...data1,...data]} xField="year" yField="value" seriesField="country" key={1}/>
};

function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
