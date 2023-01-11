/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@pankod/refine-antd"
import axios from "axios"
import { DogImages } from "interfaces"
import { useEffect as UseEffect , useState as UseState } from "react"
import styled from "styled-components"

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

const randomDog: React.FC = () => {
  const [image, setImage] = UseState<DogImages>()

  const handleClick = () => {
    loadDogImages()
  }

  async function loadDogImages() {
    const response = await axios.get("http://localhost:3333/randomDog")

    setImage(response.data);
  }

  UseEffect(() => {
    handleClick()
  }, [])

  return (
    <Container>
      <ContainerCenter>
        <ContainerDogImage>
          <img 
            src={image?.url} 
            style={{
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }} 
          />
        </ContainerDogImage>
      </ContainerCenter>
      <Button 
        type="primary" 
        onClick={handleClick} 
        style={{ width: '30%', marginTop: '20px' }} 
      > 
        Mude o cachorro 
      </Button>
    </Container>
  )
}

export default randomDog;