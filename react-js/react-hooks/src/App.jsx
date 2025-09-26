import RegisterForm from "./FormHandling";
import Layout from "./Ucontext/Layout";
import userContext from "./Ucontext/UContext";
import UEffect from "./UEffect"
import Ureducer from "./Ureducer";
import InputFocus from "./Uref/InputFocus";
import UState from "./UState"

import React, { useEffect, useState } from 'react'


function App() {

  // const [counter, setCounter] = useState(0);
  // const [data, setData] = useState(0);
  // const user = {
  //   name: "tisha shah",
  //   role: "Admin"
  // }

  return (
    <>
      {/* <UState /> */}
      {/* <hr /> */}
      {/* <UEffect counter={counter} data={data}/>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
      <hr /> */}
      {/* const userContext = createContext(); */}
      {/* <userContext.Provider value={user}>
        <Layout />
      </userContext.Provider> */}
      {/* const user = useContext(userContext) */}

      {/* prop drilling */}
      {/* <Layout user={user}/> */}
      {/* <hr /> */}


      {/* <InputFocus /> */}
      {/* <hr /> */}
      {/* <Ureducer /> */}
      <RegisterForm />
    </>
  )
}

export default App
