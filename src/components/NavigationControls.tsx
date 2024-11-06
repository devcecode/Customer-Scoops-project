import React from 'react'
import styled from 'styled-components'
import back from '../images/back.png'

interface NavigationControlsProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const NavigationControls: React.FC<NavigationControlsProps> = ({ setStep }) => {
  return (
    <NavigationControlsStyled>
      <Button 
      className="back" 
      onClick={() => setStep(current => current - 1)}>
        <img src={back} style={{width: '8.44px'}}/>
      </Button>

      <Button 
      className="next" 
      onClick={() => setStep(current => current + 1)}>Siguiente</Button>
    </NavigationControlsStyled>
  )
}

export default NavigationControls

const NavigationControlsStyled = styled.div`
display: flex;
gap: .5rem;

@media(min-width: 1244px) {
  margin-left: -43px;
}
`

const Button = styled.button`
outline: none;
background-color: transparent;

&:hover {
  cursor: pointer;
}
&.back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #000000;
}
&.next {
  width: 100px;
  height: 35px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 1.25rem;
}
`
