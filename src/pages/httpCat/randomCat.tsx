/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components"
import { useState as UseState } from "react"
import { Input } from "@pankod/refine-antd"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const ContainerCenter = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContainerDogImage = styled.div`
  height: 100%;
`


export default function randomCat() {
  const [code, setCode] = UseState("");

  const API = `http://localhost:3333/cat/${code}`

  const handleChange = (event: any) => {
    setCode(event.target.value)
  }

  return (
    <Container>
      <ContainerCenter>
        <ContainerDogImage>
          <img 
            src={API} 
            style={{
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }}
          />
        </ContainerDogImage>
      </ContainerCenter>
      <Input 
        placeholder="Digite um status code, por favor"
        onChange={handleChange} 
        style={{ width: '30%', marginTop: '20px' }} 
      />
    </Container>
  )
}