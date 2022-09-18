import React from 'react';
import css from './GTI.module.css';
import {Card} from '@consta/uikit/Card';
import {IconInfo} from '@consta/uikit/IconInfo';
import {Text} from '@consta/uikit/Text';
import {getDate} from '../../../utils/utils';

interface Props {

}

export const DrillingInfo: React.FC<Props> = ({}) => {
    return (
        <div className={`${css.notesContainer} container-column`}>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <Text>Скважина: 1R</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <Text>Забой, м: 2986</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <Text>Инструмент, м: 2406</Text>
                <Text>{getDate(Date.now()+132115)}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <Text>Высота над забоем, м: 580</Text>
                <Text>{getDate(Date.now()+151224)}</Text>
            </Card>
        </div>
    );
};

