import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import styled from "styled-components"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x:hidden;
`

function App() {

  return (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>
  )
}

export default App
