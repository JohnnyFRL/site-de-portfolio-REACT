import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home"
import Sobre from "./pages/sobre"
import Portfolio from "./pages/portfolio"
import './App.css'
import marioataque from './assets/marioataque.gif'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/sobre">Sobre</Link> | 
        <Link to="/portfolio">Portfolio</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App