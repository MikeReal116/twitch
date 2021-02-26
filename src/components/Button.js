import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn-medium", "btn--large"];
const COLOURS = ["red", "blue", "grey"];

export const Button = ({children, onClick, buttonStyle, buttonSize, buttonColor}) =>{
    
   const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0];
   const checkButtonColor = COLOURS.includes(buttonColor)?buttonColor: COLOURS[0];

    return(
        <button onClick={onClick} className = {`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor} font`}>
            {children}
        </button>
    )
}