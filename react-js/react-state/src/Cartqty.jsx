import React, { useState } from 'react'

function Cartqty() {
    const [qty, setQty] = useState(1);
    const [isDisabled, setDisabled] = useState(false)
    const inc = () => {
        if (qty >= 5){
            alert("We're sorry! Only 5 unit(s) allowed in each order")
        }
        setQty(qty + 1)
        setDisabled(false)
    }
    const dec = () => {
        if (qty > 1) {
            setQty(qty - 1)
            

        }
        if (qty <= 1) {
            setDisabled(true)
        } 
    }
    return (
        <>
            <button onClick={dec} disabled={isDisabled}>-</button>
            <span> {qty} </span>
            <button onClick={inc}>+</button>
        </>
    )
}

export default Cartqty;