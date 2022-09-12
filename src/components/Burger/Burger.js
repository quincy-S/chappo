import React from 'react'
import StyledBurger,{
  Bottom,Mid,Top
} from './StyledBurger'

const Burger = ({handleClick, show}) => {

  const barVariants = {
    "top":{
      rotate:45,
      y:"4px"
    },

    "initTop":{
      rotate:0,
      y:"-4px"
    },
    "initBot":{
      rotate:0,
      y:"4px"
    },

    "mid":{
      x:"-30px",
      opacity:0
    },
    "init":{
      x:"0px",
      opacity:1
    },
    "bottom":{
      rotate:-45,
      y:"-2px"
    }
  }

  return (
    <StyledBurger onClick ={handleClick}>
        <Top 
          variants = {barVariants}
          animate={show ? "top": "initTop"}
        />
        <Mid 
          variants = {barVariants}
          animate = {show ? "mid" : "init"}
        />
        <Bottom 
          variants = {barVariants}
          animate={show ? "bottom": "initBot"}
        />
    </StyledBurger>
  )
}

export default Burger