import styled from "styled-components"
import logo from '../images/mobile-logo.png'
import image from '../images/image.png'
// Nota: aquí a la hora de renderizar las imagenes se podria hacer de manera condicional calculando el tamaño de la ventana usando useEffect y escuchando el evento resize, esto definitivamente es una opción interesante pero dado que que el evento resize se escucha cada vez que la ventana se redimensiona y además que las imagenes en esta ocación pesan muy poco es mejor optar renderizar la imagenes y manejar la visibilidad de estas con los media queries

interface HeroInterface {
  step: number
}

const Hero: React.FC<HeroInterface> = ({ step }) => {
  
  return (
    <HeroStyled>
      <Logo src={logo} />
      <ImageContainer>
        <Step><span>{`0${step}`}</span> | 06</Step>
        <Image src={image} />
      </ImageContainer>
    </HeroStyled>
  )
}

export default Hero

const HeroStyled = styled.div`
margin-left: 10px;
border-top-left-radius: 200px;
border-bottom-left-radius: 200px;
background: linear-gradient(to right, #00CCBC 70%, #117278);
display: flex;
justify-content: space-between;
align-items: center;
height: 213px;
@media(min-width: 1244px) {
  height: 635px;
  width: 655px;
}

`



const Logo = styled.img`
display: block;
width: 100px;
height: 36.44px;
left: 49px;
position: relative;

@media(min-width: 1244px) {
  display: none;
}
`

const ImageContainer = styled.div`
position: relative;
align-self: flex-end;
width: 50%;
display: flex;
justify-content: center;

@media(min-width: 760px) {
  width: 45%;
}

@media(min-width: 1244px) {
  width: 100%;
}
`

const Step = styled.p`
position: absolute;
right: 30px;
top: -25px;

& > span {
  font-weight: 700;
}

@media(min-width: 960px) {
  top: 0;
  right: 70px;
  height: 567px;
}
`

const Image = styled.img`
height: 170px;
@media(min-width: 1244px) {
  height: 567px;
}
`

