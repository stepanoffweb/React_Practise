import styled from "styled-components"
import Button from "./components/Button"
import Console from "./components/Console"
import Flex from "./components/Flex"
import Header from "./components/Header"

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  font-family: consolas;
`
function App() {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Header>Console CMD 2021. Stas_WD</Header>
      </Flex>
      <Flex direction="column" width="80%" margin="0 auto">
        <Console fz="24px" />
        <Button color="green" align="flex-end">
          Hit the road!
        </Button>
      </Flex>
    </AppWrapper>
  )
}

export default App
