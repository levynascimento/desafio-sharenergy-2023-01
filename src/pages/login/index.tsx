/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLogin } from "@pankod/refine-core";
import { Layout, Container, TitleText } from "./style";
import {
    Row,
    Col,
    AntdLayout,
    Card,
    Typography,
    Form,
    Input,
    Button,
    Checkbox,
} from "@pankod/refine-antd";


const { Title } = Typography;

export interface ILoginForm {
    username: string;
    password: string;
    remember: boolean;
}

export const Login: React.FC = () => {
    const [form] = Form.useForm<ILoginForm>();

    const { mutate: login } = useLogin<ILoginForm>();

    const CardTitle = (
        <TitleText>      
            <Title level={3}>
                Entre na sua conta
            </Title>
        </TitleText>
        
    );

    return (
        <AntdLayout>
            <Layout>
                <Row
                    justify="center"
                    align="middle"
                    style={{
                        height: "100vh",
                    }}
                >
                    <Col xs={22}>
                        <Container>
                            <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                                <Form<ILoginForm>
                                    layout="vertical"
                                    form={form}
                                    onFinish={(values) => {
                                        login(values);
                                    }}
                                    requiredMark={false}
                                    initialValues={{
                                        username: "desafiosharenergy",
                                        password: "sh@r3n3rgy"
                                    }}
                                >
                                    <Form.Item
                                        name="username"
                                        label="Usuário"
                                        rules={[
                                            { 
                                                required: true,
                                                message: "Usuário é obrigatório"
                                            }
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            placeholder="Username"
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        label="Senha"
                                        rules={[
                                            { 
                                                required: true,
                                                message: "Senha é obrigatória"
                                            }
                                        ]}
                                        style={{ marginBottom: "12px" }}
                                    >
                                        <Input
                                            type="password"
                                            placeholder="●●●●●●●●"
                                            size="large"
                                        />
                                    </Form.Item>
                                    <div style={{ marginBottom: "12px" }}>
                                        <Form.Item
                                            name="remember"
                                            valuePropName="checked"
                                            noStyle
                                        >
                                            <Checkbox
                                                style={{
                                                    fontSize: "12px",
                                                }}
                                            >
                                                Lembre de mim
                                            </Checkbox>
                                        </Form.Item>
                                    </div>
                                    <Button
                                        type="primary"
                                        size="large"
                                        htmlType="submit"
                                        block
                                    >
                                        Entrar
                                    </Button>
                                </Form>
                            </Card>
                        </Container>
                    </Col>
                </Row>
            </Layout>
        </AntdLayout>
    );
};