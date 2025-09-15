// import './App.css'

// function Button(props){
//     let style_ = {
//         color:"white",
//         backgroundColor:"black"
//     }
//     const toggleBtn = () =>{
//         style_.backgroundColor = "green"
//     }
//     return (
//         <button className="btn" style={style_} onClick={toggleBtn}>{props.value}</button>
//     )
// }

// export default Button;


import { useState } from "react";
import './App.css';

function Button(props) {
  const [style_, setStyle] = useState({
    color: "white",
    backgroundColor: "black"
  });

  const toggleBtn = () => {
    setStyle({
      ...style_,
      backgroundColor: style_.backgroundColor === "black" ? "green" : "black"
    });
  };

  return (
    <button className="btn" style={style_} onClick={toggleBtn}>
      {props.value}
    </button>
  );
}

export default Button;
