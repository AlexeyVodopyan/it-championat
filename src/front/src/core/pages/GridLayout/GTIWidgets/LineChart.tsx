import React, {useEffect, useMemo, useState} from 'react';
import {Line} from '@consta/charts/Line'
interface Props {
    onChangeLine: (arg: number) => void
    division: number
}

export const LineChart: React.FC<Props> = ({onChangeLine, division}) => {
    const [data, setData]  = useState<any[]>([])
    const [data2, setData2]  = useState<any[]>([])
    const data1 = useMemo(() => {
        return Array.from({length: division}).map((_, index) => ({
            year: index,
            value: 0
        }))
    }, [])
    useEffect(() => {
        let i = 0
        let count = 0

        const interval = setInterval(() => {
            let newData = {
                country:  'United Kingdom',
                year: randomIntFromInterval(1, 2),
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
        return () => {
            clearInterval(interval)
        }
    },[])
    useEffect(() => {
        let i = 0
        let count = 0
        const interval = setInterval(() => {
            let newData = {
                country:  'United States',
                year: randomIntFromInterval(18, 19),
                value: count
            }
            count = count - 0.25
            setData2(prev => [...prev, newData].sort((a, b) => {
                if(a.value > b.value)
                    return 1
                if(a.value < b.value)
                    return  -1
                return 0
            }))
        }, 2000)
        return () => {
            clearInterval(interval)
        }
    },[])



    return <Line data={[...data1,...data, ...data2]} xField="year" yField="value" seriesField="country" key={1}/>
};

function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
