import { useState } from "react"
import styled from "styled-components"
import NavigationControls from "./NavigationControls"


const INDUSTRIES = [
{
  id: 'tecnologia',
  name: 'Tecnología'
},
{
  id: 'software',
  name: 'Software'
},
{
  id: 'servicios',
  name: 'Servicios'
},
{
  id: 'financiera',
  name: 'Financiera'
},
{
  id: 'telecomunicaciones',
  name: 'Telecomunicaciones'
},
{
  id: 'produccion-fabricacion',
  name: 'Producción / Fabricación'
},
{
  id: 'logistica',
  name: 'Logística'
},
{
  id: 'consumo-masivo',
  name: 'Consumo  Masivo'
},
{
  id: 'mayorista',
  name: 'Mayorista'
},
{
  id: 'retail',
  name: 'Retail'
},
{
  id: 'otra',
  name: 'Otra'
}
]

interface StepFiveProps {
  setIndustry: React.Dispatch<React.SetStateAction<string>>
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const StepFive: React.FC<StepFiveProps> = ({ setIndustry, setStep }) => {

  const [ active, setActive ] = useState<string>('')

  return (
    <StepFiveStyled>
      <Paragraph>
        <span>Ahora te vamos a sorprender...</span>
        ¿A cuál industria pertenece tu empresa?
      </Paragraph>
      <Industries>
        {
          INDUSTRIES.map((i, index) => (
            <Industry 
            key={index}
            className={active === i.id ? 'active' : ''}
            onClick={() => {setIndustry(i.name); setActive(i.id)}}>
              {i.name}
            </Industry>
          ))
        }
      </Industries>
      <NavigationControls setStep={setStep}/>
    </StepFiveStyled>
  )
}

export default StepFive

const StepFiveStyled = styled.div`

`

const Paragraph = styled.p`
color: #231331;
& > span {
  display: block;
  font-weight: 700;
  color: #000000;
}

@media(min-width: 1244px) {
  font-size: 19px;
}
`

const Industries = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: .25rem;
column-gap: .5rem;
margin-top: 1.25rem;
margin-bottom: 2.1rem;
`

const Industry = styled.button`
width: 148px;
height: 39px;
border-radius: 30px;
border: 1px solid #000000;
background-color: transparent;
font-size: 11px;

&:hover {
  cursor: pointer;
}

&.active {
  background-color: #000000;
  color: #ffffff;
}

@media(max-width: 1243px) {
  &:last-child {
    flex: 1;
  }
}

@media(min-width: 1244px) {
  width: 126px;
  padding: 0 .5rem;
}
`