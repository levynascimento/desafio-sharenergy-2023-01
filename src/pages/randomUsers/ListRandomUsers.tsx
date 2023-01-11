import React from "react";
import { Table, List, useTable, Avatar, Row, Col, Card, Form, Input, Icons, Button, FormProps } from "@pankod/refine-antd";
import { IListRandomUsers, IUserFilterVariables } from "interfaces";
import { CrudFilters, HttpError } from "@pankod/refine-core";

export default function ListUsers() {
  const { tableProps, searchFormProps } = useTable<
    IListRandomUsers,
    HttpError,
    IUserFilterVariables
  >({
      onSearch: (params) => {
          const filters: CrudFilters = [];
          const { busca } = params;

          filters.push({
            field: "busca",
            operator: "eq",
            value: busca,
          });

          return filters;
      },
  });

    
  return (
    <Row gutter={[16, 16]}>
      <Col
          xl={6}
          lg={24}
          xs={24}
          style={{
              marginTop: "48px",
          }}
      >
          <Card title="Filtro">
              <Filter formProps={searchFormProps} />
          </Card>
      </Col>

      <Col xl={18} xs={24}>   
        <List>
          <Table {...tableProps} rowKey="id">
            <Table.Column 
              key="thumbnail"
              dataIndex="thumbnail"
              title="Avatar"
              render={(avatar) => {
                return (
                  <Avatar src={`${avatar}`} style={{ scale: '1.3' }} />
                )
              }}
            />
            <Table.Column key="fullname" dataIndex="fullname" title="Nome Completo" />
            <Table.Column key="email" dataIndex="email" title="E-mail" />
            <Table.Column key="username" dataIndex="username" title="Username" />
            <Table.Column key="age" dataIndex="age" title="Idade" />
          </Table>
        </List>
      </Col>
    </Row>
  ); 
}

const Filter: React.FC<{ formProps: FormProps }> = (props) => {

  return (
      <Form layout="vertical" {...props.formProps}>
          <Row gutter={[10, 0]} align="bottom">
              <Col xs={24} xl={24} md={12}>
                  <Form.Item label={"Buscar por nome, email ou usuário"} name="busca">
                      <Input
                        prefix={<Icons.SearchOutlined />}
                      />
                  </Form.Item>
              </Col>
              <Col xs={24} xl={24} md={8}>
                  <Form.Item>
                      <Button
                          style={{ width: "100%" }}
                          htmlType="submit"
                          type="primary"
                      >
                          Filtrar
                      </Button>
                  </Form.Item>
              </Col>
          </Row>
      </Form>
  );
};