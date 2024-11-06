import styled from "styled-components"

interface StepOneProps {
  userName: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const StepOne: React.FC<StepOneProps> = ({ userName, setUserName, setStep }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)

  return (
    <StepOneStyled>
      <Paragraph>
      Muchas gracias por tu interés en conocer <span>customerScoops</span>, que a través de Formularios Conversacionales Inteligente te ayudamos<br />
      a aumentar el revenue y rentabilidad de tu negocio.
      </Paragraph>
      <Paragraph>Queremos conocerte, ¿cuál es tu nombre?</Paragraph>
      <Input type="text" placeholder="Nombre" value={userName} onChange={handleChange}/>
      <Button onClick={() => setStep(current => current + 1)}>Comenzar</Button>
    </StepOneStyled>
  )
}

export default StepOne

const StepOneStyled = styled.div`

`
const Paragraph = styled.div`
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

const Input = styled.input`
border: 1px solid transparent;
border-bottom-color: #23133180;
width: 100%;
height: 24px;
outline: none;
font-family: "Nunito Sans", sans-serif;

max-width: 340px;
`

const Button = styled.button`
background-color: #000000;
font-family: "Nunito Sans", sans-serif;
height: 35px;
width: 100px;
border-radius: 1.25rem;
color: #ffffff;
margin-top: 1.25rem;
border: none;
outline: none;

&:hover {
  cursor: pointer;
}
`