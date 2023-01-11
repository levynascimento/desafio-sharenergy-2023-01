import { useForm, Form, Input, Edit } from "@pankod/refine-antd";
import { IFormValue } from "interfaces";

export default function EditUser(Props: any) {
    const { formProps, saveButtonProps } = useForm<IFormValue>();
    return (
        <Edit saveButtonProps={saveButtonProps} >
            <Form {...formProps} size="large" layout="vertical">
                <Form.Item
                    name={"name"}
                    label="Nome"
                    style={{ maxWidth: "600px" }}
                    rules={[
                        { 
                            required: true,
                            message: "Por favor, preencha com seu nome"
                        }
                    ]}
                    hasFeedback
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name={"email"}
                    label="E-mail"
                    style={{ maxWidth: "600px" }}
                    rules={[
                        { 
                            required: true,
                            message: "Por favor, preencha com seu e-mail"
                        },
                        {
                            type: "email",
                            message: "Insira um e-mail válido, por favor"
                        }
                    ]}
                    hasFeedback
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name={"phone"}
                    label="Telefone"
                    style={{ maxWidth: "600px" }}
                    rules={[
                        { 
                            required: true,
                            message: "Por favor, preencha com seu telefone"
                        }
                    ]}
                    hasFeedback
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name={"address"}
                    label="Endereço"
                    style={{ maxWidth: "600px" }}
                    rules={[
                        { 
                            required: true,
                            message: "Por favor, preencha com seu endereço"
                        }
                    ]}
                    hasFeedback
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name={"cpf"}
                    label="CPF"
                    style={{ maxWidth: "600px" }}
                    rules={[
                        { 
                            required: true,
                            message: "Por favor, preencha com seu CPF"
                        }
                    ]}
                    hasFeedback
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Edit>
    )
}