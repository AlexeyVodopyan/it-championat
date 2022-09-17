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
                <IconInfo view={'brand'} /> <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <IconInfo view={'brand'} /> <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <IconInfo view={'brand'} /> <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <IconInfo view={'brand'} /> <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
        </div>
    );
};

