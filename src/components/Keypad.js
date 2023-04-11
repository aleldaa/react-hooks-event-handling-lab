import React from "react"

function Keypad (){
    function handleChange(event){
        console.log('Entering password...')
    }
    return (
        <div>
            <input 
            onChange={handleChange} 
            type="password"
            name="password"
            placeholder="password" 
            />
        </div>
    )
}

export default Keypad;