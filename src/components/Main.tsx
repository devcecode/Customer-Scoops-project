import styled from "styled-components"
import Hero from "./Hero"
import Steps from "./Steps"
import { useState } from "react"

function Main() {

  const [ step, setStep ] = useState<number>(1)

  return (
    <MainStyled isStepSix={step === 6}>
      <Hero step={step}/>
      <Steps step={step} setStep={setStep} />
    </MainStyled>
  )
}

export default Main

const MainStyled = styled.main<{ isStepSix: boolean }>`
@media(min-width: 1244px) {
  background-color: ${({ isStepSix }) => isStepSix && '#00CCBC'};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
}
`
