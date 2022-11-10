import React, { Component } from 'react';

// import './css/components/numpad.css'

export default class Btn extends Component {
    render() {
        return (
            <div className = "btn">

                <input type = "textarea" className = "btn__disp" />
                
                <input type = 'button' id = 'num' className = 'btn__1' value = '1' key = "1" onClick = { () => { var x = document.querySelector('.btn__1');document.querySelector('.btn__disp').value += x.value } } />
                <input type = 'button' id = 'num' className = 'btn__2' value = '2' key = "2" onClick = { () => { var x = document.querySelector('.btn__2');document.querySelector('.btn__disp').value += x.value } } />
                <input type = 'button' id = 'num' className = 'btn__3' value = '3' key = "3" onClick = { () => { var x = document.querySelector('.btn__3');document.querySelector('.btn__disp').value += x.value } } /> 
                <input type = 'button' id = 'num' className = 'btn__4' value = '4' key = "4" onClick = { () => { var x = document.querySelector('.btn__4');document.querySelector('.btn__disp').value += x.value } } />
                <input type = 'button' id = 'num' className = 'btn__5' value = '5' key = "5" onClick = { () => { var x = document.querySelector('.btn__5');document.querySelector('.btn__disp').value += x.value } } />
                <input type = 'button' id = 'num' className = 'btn__6' value = '6' key = "6" onClick = { () => { var x = document.querySelector('.btn__6');document.querySelector('.btn__disp').value += x.value } } />
                <input type = 'button' id = 'num' className = 'btn__7' value = '7' key = "7" onClick = { () => { var x = document.querySelector('.btn__7');document.querySelector('.btn__disp').value += x.value } } />
                <input type = 'button' id = 'num' className = 'btn__8' value = '8' key = "8" onClick = { () => { var x = document.querySelector('.btn__8');document.querySelector('.btn__disp').value += x.value } } />
                <input type = 'button' id = 'num' className = 'btn__9' value = '9' key = "9" onClick = { () => { var x = document.querySelector('.btn__9');document.querySelector('.btn__disp').value += x.value } } />
    
            </div>
        );
    }
}


