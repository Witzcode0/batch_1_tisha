

import Button from "./Button.jsx"
import Footer from "./components/footer/Footer.jsx"
import Nav from "./components/header/Nav.jsx"
import Card from "./components/main/Card.jsx"
import MountingClassExample from "./components/main/Mounting.jsx"
import Musics from "./components/main/Musics.jsx"

function App() {

  return (
    <>
      <Nav/>

      {/* < MountingClassExample /> */}

      <Musics/>

      <Card />
      <Button value="Register"/>
      <Button value="Login"/>
      <Button value="Get in touch"/>
      <Footer/>
    </>
  )
}

export default App
