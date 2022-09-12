import styled from "styled-components";
import {motion} from "framer-motion"

const StyledBurger = styled.div`
    width:3rem;
    height:3rem;
    margin-left:auto;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    position:relative;
    z-index:5;
    
    flex-direction:column;

    @media (min-width:1024px){
        display:none;
    }
`

export const Mid = styled(motion.div)`
    width:1.5rem;
    background:white;
    height:0.2em;
    border-radius:5em;
`

export const Top = styled(Mid)`
    transform:translateY(-4px);
`

export const Bottom = styled(Mid)`
    transform:translateY(4px);
`

export default StyledBurger