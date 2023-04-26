import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomeTasks from "./pages/HomeTasks"
import AddTasks from "./pages/AddTask"
import List from "./components/List"

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const contador =22
  let name= "Soy Macho"
  return (
    <div>
      <Header>
        <Navbar />
      </Header>
      <Contenido/>
      <footer/>
    </div>
  )
}
export default App