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
                <IconLightningBolt view={'alert'} /> <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
        </div>
    );
};

