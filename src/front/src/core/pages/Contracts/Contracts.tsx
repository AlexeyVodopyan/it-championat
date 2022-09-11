import React from 'react';
import css from '../Main.module.css'
import { Table, TableColumn } from '@consta/uikit/Table';
import { IconDownload } from '@consta/uikit/IconDownload';
import { mockRowDataForTable } from './__mock__'
import { Button } from '@consta/uikit/Button';
interface Props {

}
const rows = mockRowDataForTable;
let rowId: string | undefined;
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
        align: 'center',
        renderCell: (row: { id: string; }) => {
            return <a href={require("../../../assets/__TestPdf__.pdf")} download={`__${row.id}__TestFile`}>
                <Button
                    size="s"
                    label="Cкачать"
                    title='Скачать договор'
                    iconRight={IconDownload}
                />
            </a>
        }
    },
];

export const Contracts: React.FC<Props> = ({ }) => {

    return (
        <div className={css.container}>
            <Table
                rows={rows}
                columns={columns}
                borderBetweenColumns
                zebraStriped="even"
            />;
        </div>
    );
};

