// Code Keypad Component Here
import React from 'react'
class Keypad extends React.Component{


    keyUpEvent = (e) => {
        
        console.log('Entering password...')
    }

    render(){
        return(
        <input type="password" onKeyUp={this.keyUpEvent}/>
        )
    }

    // onKeyUp={keyUpEvent}
}

export default Keypad