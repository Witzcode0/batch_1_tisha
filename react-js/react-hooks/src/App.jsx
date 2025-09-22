import UEffect from "./UEffect"
import UState from "./UState"

import React, { useEffect, useState } from 'react'


function App() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  return (
    <>
      <UState />
      <hr />
      <UEffect counter={counter} data={data}/>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
      <hr />
    </>
  )
}

export default App
