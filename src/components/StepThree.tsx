import { useState } from "react"
import styled from "styled-components"
import NavigationControls from "./NavigationControls"

const challenges = [
  {
    letter: 'A',
    name: 'Aumentar conversión de leads a clientes',
  },
  {
    letter: 'B',
    name: 'Reducir customer churn',
  },
  {
    letter: 'C',
    name: 'Implementar un programa VoC'
  },
  {
    letter: 'D',
    name: 'Reducir costos en gestión de reclamos'
  },
  {
    letter: 'E',
    name: 'Optimizar procesos comerciales'
  },
  {
    letter: 'F',
    name: 'Optimizar procesos operativos'
  },
  {
    letter: 'G',
    name: 'Otro'
  }
  
]

interface StepThreeProps {
  setChallenge: React.Dispatch<React.SetStateAction<string>>
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const StepThree: React.FC<StepThreeProps> = ({setChallenge, setStep}) => {

  const [ active, setActive ] = useState<string>('')

  return (
    <StepThreeStyled>
      <Paragraph>
        ¿Cuáles son tus principales desafíos para 2024?
      </Paragraph>
      <Challenges>
        {
          challenges.map((c, index) => (
            <Challenge 
            key={index} 
            className={active === c.letter ? 'active' : ''}
            onClick={() => {setChallenge(c.name); setActive(c.letter)}}>
              <Letter>{c.letter}</Letter>
              <Name>{c.name}</Name>
            </Challenge>
          ))
        }
      </Challenges>
      <NavigationControls setStep={setStep}/>
    </StepThreeStyled>
  )
}

export default StepThree

const StepThreeStyled = styled.div`

`

const Paragraph = styled.p`
color: #231331;
@media(min-width: 1244px) {
  font-size: 19px;
}
`

const Challenges = styled.div`
display: flex;
flex-direction: column;
gap: .25rem;
margin: 1.25rem 0;

@media(min-width: 1244px) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
`

const Challenge = styled.div`
background-color: transparent;
display: flex;
align-items: center;
gap: 1.25rem;
border: 1px solid #000000;
height: 39px;
border-radius: 30px;
padding: .25rem;

@media(min-width: 1244px) {
  width: 180px;
}

&:hover {
  cursor: pointer;
}

&.active {
  background-color: #000000;
  color: #ffffff;
}
`

const Letter = styled.p`
width: 50px;
height: 30px;
background-color: #00CCBC;
color: #ffffff;
border-radius: 1.25rem;

display: flex;
justify-content: center;
align-items: center;
`

const Name = styled.p`
font-size: 11px;
`