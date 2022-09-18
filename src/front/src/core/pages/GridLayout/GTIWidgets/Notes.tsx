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
                <Text>Смена долота, глубина 2100 м</Text>
                <Text>Иван Васильевич Углеводородов</Text>
                <Text>{getDate(Date.now())}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" status="alert" className={css.card}>
                <Text>Поглощение раствора 5м3, глубина 2200 м </Text>
                <Text>Иван Васильевич Углеводородов</Text>
                <Text>{getDate(Date.now()+4132115)}</Text>
            </Card>
            <Card verticalSpace="xs" horizontalSpace="xs" status="warning" className={css.card}>
                <Text>Смена бурильной свечи, глубина 2350 м</Text>
                <Text>Дмитрий Петрович Нефтегазов</Text>
                <Text>{getDate(Date.now()+8132115)}</Text>
            </Card>
            <Button iconLeft={IconAdd}/>
        </div>
    );
};

