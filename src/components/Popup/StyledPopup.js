import styled from "styled-components";
import {motion} from "framer-motion"

const StyledPopup = styled(motion.div)`
    font-size:1.5rem;
    position:absolute;
    position:fixed;
    z-index:2;
    background-color:rgb(37, 37, 64);
    color:white;
    top:0;
    right:0;
    height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;

    @media (min-width:1024px){
        display:none;
     }
`

export const StyledLinks = styled.div`
     display:flex;
     align-items:center;
     flex-direction:column;
     gap:3rem;
`

export const StyledButtons = styled.div`
        color:white;
        column-gap:2rem;
        display:flex;
        align-items:center;
        margin-top:2rem;
        


    button{
        font-size:1.5rem;
        color:white;
        padding:0.5rem 1.5rem;
        border-radius:1.5rem;
        background-color:rgb(59, 130, 246);
        border:none;
    }

    span{
        color: hsla(0,0%,100%,.2);
    }
`

export const StyledSection = styled.div`
    margin:auto;
`

export default StyledPopup