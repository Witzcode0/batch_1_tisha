import React, { useRef, useState } from 'react'

function InputFocus() {
    const inputRef = useRef(null);
    const otpInputRef = useRef(null);
    const [input, setInput] = useState("");

    const handleFocus = (event) => {
        console.log(event.target)
        inputRef.current.focus();
        // inputRef.current.style.backgroundColor = "red";
        // inputRef.current.style.display = "none";
        // console.log(inputRef);
    }

    const onchangeInput = (event) =>{
        let val = event.target.value;
        console.log(val)
        setInput(val);
        if (val.length > 0){
            otpInputRef.current.style.display = "inline"
        }

    }


    return (
        <div>
            <input ref={inputRef} onChange={onchangeInput} type="text" placeholder='Type something...' />
            <input ref={otpInputRef} type="text" name='otp' style={{display:"none"}} />
            <button  onClick={handleFocus}>Focus Button</button>
        </div>
    )
}

export default InputFocus