import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}></Route>
          <Route path="/about" element={<h1>About Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
