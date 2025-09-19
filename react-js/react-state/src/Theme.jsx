import React, { useState } from 'react'

const darkTheme = {
  height:"100px",
  width:"100%",
  backgroundColor:"black",
  color : "white",
  border:"1px solid white",
  display:"flex",
  flexDirection:"column"
} 
const lightTheme = {
  height:"100px",
  width:"100%",
  backgroundColor:"white",
  color : "black",
  border:"1px solid black",
  display:"flex",
  flexDirection:"column"
} 

// 🌙☀️
function Theme() {
  const [isDark, setDark] = useState(false);
  // const [isBtnDark, setBtnDark] = useState(false);

  const ThemeToggle = () => {
    if(!isDark){
      setDark(true)
      // setBtnDark(true)
    }else{
       setDark(false)
      //  setBtnDark(false)
    }
  }

  return (
    <div style={(!isDark)?lightTheme:darkTheme}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis eius consequatur sapiente velit expedita facilis totam, esse dignissimos aliquid ut.</p>
        <button onClick={ThemeToggle}>{(!isDark)?"Light Theme ☀️":"Dark Theme 🌙"}</button>
    </div>
  )
}

export default Theme;