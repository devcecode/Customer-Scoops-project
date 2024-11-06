import styled from "styled-components"

const StepSix = () => {
  return (
    <StepSixStyled>
      <Paragraph>
        <h2>Muchas Gracias</h2>
        por querer ser parte <br />
        de la familia Scoopers.
      </Paragraph>
      <Paragraph><span>Nos vemos pronto!</span></Paragraph>
      <Link href="https://www.customerscoops.com/" target="_blank">Finalizar</Link>
    </StepSixStyled>
  )
}

export default StepSix

const StepSixStyled = styled.div`
`

const Paragraph = styled.p`
& > span {
  font-style: italic;
}

&:first-child {
  margin-bottom: 2.3rem;
}
`

const Link = styled.a`
margin-top: 2.1rem;
display: block;
width: 130px;
height: 39px;
border-radius: 30px;
background-color: #000000;

display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
color: #ffffff;
`