import React from 'react'
import StyledPopup,{StyledLinks, StyledButtons, StyledSection} from "./StyledPopup"


const Popup = ({show}) => {
    
    const popupVariants = {
        "init":{
            x:"-150rem",
            
        },
        "anim":{
            x:0,
            opacity:1,
            transition:{type:"tween"}
        }
    }

  return (
    <StyledPopup
        variants={popupVariants}
        initial="init"
        animate = {show ? "anim" : "init"}
    >
        <StyledSection>
            <StyledLinks>
                {["Products","Features","About","Contact"].map(el =>
                <p key={el}>{el}</p>)}
            </StyledLinks>
            <StyledButtons>
                <p>Login</p>
                <span>|</span>
                <button>Register</button>
            </StyledButtons>
        </StyledSection>
    </StyledPopup>
  )
}

export default Popup