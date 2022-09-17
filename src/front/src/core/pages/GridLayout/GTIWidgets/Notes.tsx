import React from 'react';
import css from './GTI.module.css'
import {Card} from '@consta/uikit/Card';
import {Text} from '@consta/uikit/Text';
import {Button} from '@consta/uikit/Button';
import {IconAdd} from '@consta/uikit/IconAdd';
import {getDate} from '../../../utils/utils';
interface Props {

}

export const Notes: React.FC<Props> = ({}) => {
    return (
        <div className={`${css.notesContainer} container-column`}>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" status="alert" className={css.card}>
                <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" status="warning" className={css.card}>
                <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" className={css.card}>
                <Text>Отступы 'xs'</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Button iconLeft={IconAdd}/>
        </div>
    );
};

