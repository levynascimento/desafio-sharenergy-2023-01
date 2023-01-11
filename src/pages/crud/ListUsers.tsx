import React from "react";
import { Table, List, useTable, Space, EditButton, DeleteButton, ShowButton } from "@pankod/refine-antd";
import { IFormValue } from "interfaces";

export default function ListUsers() {
    const { tableProps } = useTable<IFormValue>();
    return (
        <List>
            <Table {...tableProps} rowKey="_id">
                <Table.Column dataIndex="name" title="Nome" />
                <Table.Column dataIndex="email" title="E-mail" />
                <Table.Column dataIndex="phone" title="Telefone" />
                <Table.Column dataIndex="address" title="Endereço" />
                <Table.Column dataIndex="cpf" title="CPF" />
                <Table.Column<IFormValue>
                    fixed="right"
                    title="Ações"
                    dataIndex="actions"
                    render={(__text_, _record_): React.ReactNode => {
                        return (
                            <Space>
                                <ShowButton 
                                    size="small"
                                    recordItemId={_record_._id}
                                    hideText
                                />
                                <EditButton
                                    size="small"
                                    recordItemId={_record_._id}
                                    hideText
                                />
                                <DeleteButton 
                                    size="small"
                                    recordItemId={_record_._id}
                                    hideText
                                    confirmTitle="Você quer excluir esse usuário?"
                                    confirmCancelText="Não"
                                    confirmOkText="Sim"
                                />
                            </Space>
                        )
                    }}
                />
            </Table>
        </List>
    )
}

