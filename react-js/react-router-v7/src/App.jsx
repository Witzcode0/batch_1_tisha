import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Services from "./Services"
import Blog from "./Blog"
import About from "./About"
import Contact from "./Contact"
import ServiceDetail from "./ServiceDetail"


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} >
          <Route path="service/:id" element={<ServiceDetail />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
