import styled from "styled-components"
import Hero from "./Hero"
import Steps from "./Steps"
import { useState } from "react"

function Main() {

  const [ step, setStep ] = useState<number>(1)

  return (
    <MainStyled>
      <Hero step={step}/>
      <Steps />
    </MainStyled>
  )
}

export default Main

const MainStyled = styled.main`
margin: 0 auto;
@media(min-width: 1244px) {
  flex-direction: row-reverse;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
`
