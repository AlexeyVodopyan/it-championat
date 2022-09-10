import React from 'react';
import css from '../Main.module.css'
import { Table, TableColumn } from '@consta/uikit/Table';
import { IconDownload } from '@consta/uikit/IconDownload';
import { mockRowDataForTable } from './__mock__'
interface Props {

}
const rows = mockRowDataForTable;

const columns: TableColumn<typeof rows[number]>[] = [
    {
        title: 'Номер договора',
        accessor: 'id',
        sortable: true,
        width: 200
    },
    {
        title: 'Наименование договора',
        accessor: 'name',
        sortable: true,
    },
    {
        title: 'Подрядчик',
        accessor: 'contractor',
        sortable: true,
    },
    {
        title: 'Заказчик',
        accessor: 'costumer',
        sortable: true,
    },
    {
        title: '',
        accessor: 'download',
        width: 80,
        align: 'center',
        renderCell: () => <IconDownload view='link' size='s'/>
    },
];
export const Contracts: React.FC<Props> = ({ }) => {
    return (
        <div className={css.container}>
            <Table rows={rows} columns={columns} borderBetweenColumns zebraStriped="even"/>;
        </div>
    );
};

