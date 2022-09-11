import React from "react";
import { Table, TableColumn } from "@consta/uikit/Table";
import {мockEquipmentData} from "./__mock__"
import {IconInfo} from "@consta/uikit/IconInfo";

interface Props {}

const rows = мockEquipmentData;

const columns: TableColumn<typeof rows[number]>[] = [
  {
    title: "Инвентарный номер",
    accessor: 'id',
    sortable: true,
    width: 220
  },
  {
    title: "Заводской номер",
    accessor: 'factoryNumber',
    sortable: true,
    width: 200
  },
  {
    title: "Модель",
    accessor: 'model',
    sortable: true,
  },
  {
    title: "Статус",
    accessor: 'status',
    sortable: true,
    width: 200
  },
  {
    title: "Состояние",
    accessor: 'state',
    sortable: true,
    width: 200
  },
  {
    title: "Место эксплуатации",
    accessor: 'workLocation',
    sortable: true,
  },
  {
    title: "",
    accessor: 'info',
    width: 100,
    align: 'center',
    renderCell: () => <IconInfo  view = "link"/>
  },
]

export const Equipments: React.FC<Props> = () => {
  return <Table rows={rows} columns={columns} borderBetweenColumns borderBetweenRows zebraStriped="even" stickyHeader />
}
