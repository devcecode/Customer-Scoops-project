import { useState } from "react"
import styled from "styled-components"
import NavigationControls from "./NavigationControls"

const companyPositions = [
  {
    id: 'board-member',
    name: 'Board member'
  },
  {
    id: 'c-level',
    name: 'C-level'
  },
  {
    id: 'gerente',
    name: 'Gerente'
  },
  {
    id: 'subgerente',
    name: 'Subgerente'
  },
  {
    id: 'jefe-area',
    name: 'Jefe Área'
  },
  {
    id: 'lider-area',
    name: 'Lider de área'
  },
  {
    id: 'ejecutivo/analista',
    name: 'Ejecutivo / Analista'
  },
  {
    id: 'otro',
    name: 'Otro'
  }
]

interface StepTwoProps {
  userName: string
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const StepTwo: React.FC<StepTwoProps> = ({ userName, setStep }) => {

  const [ active, setActive ] = useState<string>('')

  return (
    <StepTwoStyled>
      <Paragraph>
      <span>Genial, {userName},</span> ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:
      </Paragraph>
      <Paragraph>
      ¿Cuál es tu cargo/posición dentro de tu empresa?
      </Paragraph>
      <CompanyPositions>
        {
          companyPositions.map((cp, index) => (
            <CompanyPositionButton 
            key={index}
            className={cp.id === active ? 'active' : ''}
            onClick={() =>{setActive(cp.id)}}>
              {cp.name}
            </CompanyPositionButton>
          ))
        }
      </CompanyPositions>
      <NavigationControls setStep={setStep}/>
    </StepTwoStyled>
  )
}

export default StepTwo

const StepTwoStyled = styled.div`

`

const Paragraph = styled.p`
color: #231331;
margin-bottom: 2.1rem;
& > span {
  color: #000000;
  font-weight: 700;
}

@media(min-width: 1244px) {
  font-size: 19px;
}
`

const CompanyPositions = styled.div`
display: flex;
row-gap: .25rem;
column-gap: .5rem;
flex-wrap: wrap;
margin-bottom: 3.1rem;
`

const CompanyPositionButton = styled.button`
border: 1px solid #000000;
border-radius: 1.25rem;
width: 148px;
height: 39px;
outline: none;
background-color: transparent;

@media(min-width: 1244px) {
  width: 125px;
  padding: 0 .5rem;
}

&:hover {
  cursor: pointer;
}

&.active {
  background-color: #000000;
  color: #ffffff;
}
`