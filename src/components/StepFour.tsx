import { useState } from "react"
import styled from "styled-components"
import NavigationControls from "./NavigationControls"

const CRMS = [
{
  id: 'sap',
  name: 'SAP'
},
{
  id: 'microsoft-dinamics',
  name: 'Microsoft Dynamics'
},
{
  id: 'salesforce',
  name: 'SalesForce'
},
{
  id: 'hubspot',
  name: 'Hubspot'
},
{
  id: 'zoho',
  name: 'Zoho'
},
{
  id: 'netsuite-oracle',
  name: 'Netsuite - (Oracle)'
},
{
  id: 'monday',
  name: 'Monday'
},
{
  id: 'crm-propio',
  name: 'CRM Propio'
},
{
  id: 'no-tengo-crm',
  name: 'No tengo CRM'
}
]

interface StepFourProps {
  setCrm: React.Dispatch<React.SetStateAction<string>>
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const StepFour: React.FC<StepFourProps> = ({ setCrm, setStep }) => {

  const [ active, setActive ] = useState<string>('')

  return (
    <StepFourStyled>
      <Paragraph>
      ¿Cuál CRM están utilizando en tu empresa?<br />
      CRM:
      </Paragraph>
      <Crms>
        {
          CRMS.map((c, index) => (
            <Crm
            key={index}
            className={active === c.id ? 'active' : ''}
            onClick={() => {setCrm(c.name); setActive(c.id)}}>
              {c.name}
            </Crm>
          ))
        }
      </Crms>
      <NavigationControls setStep={setStep}/>
    </StepFourStyled>
  )
}

export default StepFour

const StepFourStyled = styled.div`
`

const Paragraph = styled.p`
color: #231331;
span {
  display: block;
  font-weight: 700;
  color: #000000;
}

@media(min-width: 1244px) {
  font-size: 19px;
}
`

const Crms = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: .25rem;
column-gap: .5rem;
margin-top: 1.25rem;
margin-bottom: 3.1rem;
`

const Crm = styled.button`
outline: none;
background-color: transparent;
border: 1px solid #000000;
width: 148px;
height: 39px;
border-radius: 30px;

@media(min-width: 1244px) {
  width: 126px;
  padding: 0 .5rem;
}

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

`
