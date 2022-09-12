import { Modal } from '@consta/uikit/Modal';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { Table, TableColumn } from "@consta/uikit/Table";
import { IconClose } from '@consta/uikit/__internal__/cjs-src/icons/IconClose/IconClose';
import React from 'react';

import { EquipmentInfo, EquipmentInformationProps } from './types';
import css from './EquipmentInfo.module.css';

const columns: TableColumn<EquipmentInfo>[] = [
    {
        title: "Инвентарный номер",
        accessor: 'id',
        align: 'center'
    },
    {
        title: "Заводской номер",
        accessor: 'factoryNumber',
        align: 'center'
    },
    {
        title: "Статус",
        accessor: 'status',
        align: 'center'
    },
    {
        title: "Состояние",
        accessor: 'state',
        align: 'center'
    },
    {
        title: "Место эксплуатации",
        accessor: 'workLocation',
        align: 'center'
    }
]

export const EquipmentInfoModal: React.FC<EquipmentInformationProps> = ({ toolId, closeModal}) => {
    const equipment:EquipmentInfo = {
        id: toolId,
        factoryNumber: '12',
        model: 'Пульт управления ПУ-1',
        status: 'В резерве',
        state: 'В ремонте',
        workLocation: 'Завод1\\Цех №2',
        info: ""
    }

    return <Modal hasOverlay={false} isOpen>
        <div className={`${css.toolInformation__header} justify-between container-row align-center p-h-2 m-b-2`}>
            <div className='container-row align-center'>
                <Text>
                    { equipment.model }
                </Text>
            </div>
            <div className='container-row align-center'>
                <Button onClick={closeModal} iconLeft={IconClose} size={'s'} view={'clear'}/>
            </div>
        </div>
        <div>
            <Table rows={[equipment]} columns={columns} stickyHeader getCellWrap={(row) => 'break'}/>
        </div>
    </Modal>
}
