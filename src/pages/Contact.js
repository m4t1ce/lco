import React, { useState, useRef } from 'react';
import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay';

function Copy(event){
    const addres=event.target.textContent
    navigator.clipboard.writeText(addres)
}
export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    render(){
        return(
        <div className="contact">
            <div className="contactContainer">
                <div style={{display:"flex"}}>
                    <div style={{width:"40%",height:"5vh"}}>
                        Call us: 
                    </div>
                    <div style={{width:"100%",height:"5vh",color:"rgb(94,217,254)"}}>
                        <a href="tel:+91999999999">+91999999999</a>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <div style={{width:"40%",height:"25vh"}}>
                        Address: 
                    </div>
                    <div style={{width:"100%",height:"25vh",color:"silver"}}>
                        LCO Basketball Ground,<br/>55 - Fictional Homes,
                        <br/>Fictional Road,<br/>Near Fictional Lake.
                    </div>
                </div>
            </div>    
        </div>
        )
    }}

export default Contact;
