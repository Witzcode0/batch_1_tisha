import React, {useEffect, useState} from 'react'

function UEffect({counter, data}) {
    // const [counter, setCounter] = useState(0);
    // const [data, setData] = useState(0);

    // useEffect(function, dependancy);

    // useEffect(() => {
    //     APIData()
    // })  // call every time

    // useEffect(() => {
    //     APIData()
    // }, []); // call only once

    // useEffect(() => {
    //     APIData()
    // }, [counter]); // call on changing single state

    // useEffect(() => {
    //      CounterData()
    //      Data()
    // }, [counter, data]); // call on changing both state

    // function CounterData() {
    //     console.log("CounterData(): ", counter);
    // }
    // function Data() {
    //     console.log("Data(): ", data);

    // useEffect(() => {
    //      CounterData()
    // }, [counter]); // call on changing single state

    // useEffect(() => {
    //      Data()
    // }, [data]); // call on changing single state

    // function CounterData() {
    //     console.log("CounterData(): ", counter);
    // }
    // function Data() {
    //     console.log("Data(): ", data);
    // }

    useEffect(() => {
         CounterData()
    }, [counter]); // call on changing single state

    useEffect(() => {
         Data()
    }, [data]); // call on changing single state

    function CounterData() {
        console.log("CounterData(): ", counter);
    }
    function Data() {
        console.log("Data(): ", data);
    }
    
    return (
        <>
            <div>UEffect</div>
            {/* <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
            <button onClick={() => setData(data + 1)}>Data {data}</button> */}
        </>

    )
}

export default UEffect