import styled from "styled-components"
import mobileLogo from '../images/hero/mobile-logo.png'
import mobileImage from '../images/hero/mobile-image.png'

import deskLogo from '../images/hero/desk-logo.png'
import deskImage from '../images/hero/desk-image.png'

// Nota: aquí a la hora de renderizar las imagenes se podria hacer de manera condicional calculando el tamaño de la ventana usando useEffect y escuchando el evento resize, esto definitivamente es una opción interesante pero dado que que el evento resize se escucha cada vez que la ventana se redimensiona y además que las imagenes en esta ocación pesan muy poco es mejor optar renderizar la imagenes y manejar la visibilidad de estas con los media queries

interface HeroInterface {
  step: number
}

const Hero: React.FC<HeroInterface> = ({ step }) => {
  
  return (
    <HeroStyled>
      <Logo className="mobile-logo" src={mobileLogo} />
      <Logo className="desk-logo" src={deskLogo} />
      <Image className="mobile-image" src={mobileImage} />
      <Image className="desk-image" src={deskImage} />
    </HeroStyled>
  )
}

export default Hero

const HeroStyled = styled.div`
margin-left: 10px;
border-top-left-radius: 200px;
border-bottom-left-radius: 200px;

display: flex;
justify-content: space-between;
align-items: center;
`



const Logo = styled.img`
display: block;
width: 100px;
height: 36.44px;
position: absolute;
left: 49px;
&.desk-logo {
  display: none;
}
@media(min-width: 1244px) {
  &.mobile-logo {
    display: none;
  }
}
`

const Image = styled.img`
  width: 100%;
&.desk-image {
  display: none;
}
@media(min-width: 1244px) {
  &.mobile-image {
    display: none;
  }
  &.desk-image {
    width: 635px;
    display: block;
  }
}
`

