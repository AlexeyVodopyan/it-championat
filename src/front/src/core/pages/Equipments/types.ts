export type EquipmentInformationProps = {
    toolId: string
    closeModal: () => void
}

export type EquipmentInfo = {
    id: string,
    factoryNumber: string,
    model: string,
    status: string,
    state: string,
    workLocation: string,
    info: string
}