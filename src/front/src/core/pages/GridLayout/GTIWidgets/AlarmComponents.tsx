import React from 'react';
import {Card} from '@consta/uikit/Card';
import {IconLightningBolt} from '@consta/uikit/IconLightningBolt';
import css from './GTI.module.css';
import {Text} from '@consta/uikit/Text';
import {getDate} from '../../../utils/utils';

interface Props {

}

export const AlarmComponents: React.FC<Props> = ({}) => {
    return (
        <div className={`${css.notesContainer} container-column`}>
            <Card verticalSpace="xs" horizontalSpace="xs" status="alert" className={css.card}>
                <IconLightningBolt view={'alert'} /> <Text>Плотность раствора на выходе меньше 800 кг/м3</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" status="alert" className={css.card}>
                <IconLightningBolt view={'alert'} /> <Text>Вес на крюке больше 100 т</Text>
                <Text>{getDate(Date.now()+332115)}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" status="alert" className={css.card}>
                <IconLightningBolt view={'alert'} /> <Text>Отклонение от плановой траектории больше 20%</Text>
                <Text>{getDate(Date.now()+532115)}</Text>
            </Card>
        </div>
    );
};

