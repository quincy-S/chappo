import styled from "styled-components";

const StyledCryptos = styled.div`
    
    margin-top:3rem;
    display:flex;
    flex-direction:column;
    
    gap:2rem;
    ${'' /* border:2px solid red; */}
    

    @media (min-width:1024px){
       flex-direction:row;
       padding:0 2rem;
       padding-bottom:2rem;
       ${'' /* gap:30px; */}
    }
`

export const StyledCryptoCard = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:1rem;
    ${'' /* border:2px solid red; */}
    background-color:white;
    ${'' /* margin-bottom:3rem; */}
    ${'' /* gap:5rem; */}

    span{
        border:2px solid hsla(261, 88%, 23%, 0.2);
        border-radius:50%;
        width:4rem;
        height:4rem;
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:2rem;
        margin-bottom:3rem;
    }


    img{
        ${'' /* max-width:50px; */}
        margin:3rem 0;
    }
`

export const StyledHeading = styled.div`
    display:flex;
    align-items:center;
    
    margin-bottom:1.5rem;
    h1{
        font-size:2rem;
        font-weight:700;
        margin-right:0.5rem;
        color:#0D0D2B;
    }

    h6{
        font-size:1rem;
        color:rgb(156, 163, 175);
    }

`

export const StyledText = styled.div`
    margin-bottom:1.5rem;
    padding:0 3rem;
    text-align:center;
`

export default StyledCryptos