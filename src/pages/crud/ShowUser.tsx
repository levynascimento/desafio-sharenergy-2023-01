import { IFormValue } from "interfaces"
import { Show, Typography } from "@pankod/refine-antd"
import { useShow } from "@pankod/refine-core"

const { Title, Text } = Typography

export default function ShowUser() {
  const { queryResult } = useShow<IFormValue>();
  const { data, isLoading } = queryResult;
  const user = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}> Nome </Title>
      <Text>{user?.name}</Text>

      <Title level={5}> E-mail </Title>
      <Text>{user?.email}</Text>

      <Title level={5}> Telefone </Title>
      <Text>{user?.phone}</Text>

      <Title level={5}> Endereço </Title>
      <Text>{user?.address}</Text>

      <Title level={5}> CPF </Title>
      <Text>{user?.cpf}</Text>
    </Show>
  )
}