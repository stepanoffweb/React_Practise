import styled from "styled-components"
import Header from "./components/Header"

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
`
function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  )
}

export default App
