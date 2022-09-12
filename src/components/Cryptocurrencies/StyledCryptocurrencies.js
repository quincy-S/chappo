import styled from "styled-components"

const StyledCryptocurrencies = styled.div`
    
    ${'' /* border:2px solid red; */}
    padding:1rem;
    padding-top:9rem;
    background-color:rgb(249, 250, 251);

    h1{
        color:#0D0D2B;
        text-align:center;
        font-size:1.5rem;
        line-height:2rem;
        font-weight:700;
    }

    @media (min-width:780px){
       max-width:800px;
       padding: 1rem 2rem;
    }

    @media (min-width:1024px){
       padding: 10rem 3rem 0rem 3rem; 
       max-width: 100%;
    }

    @media (min-width:1200px){
        max-width: 100%;

     
    }
`

export const StyledSection = styled.div`
    margin:0 auto;

    @media (min-width:1024px){
       max-width: 1024px;

    }

    @media (min-width:1200px){
        max-width: 1200px;

    }
`


export default StyledCryptocurrencies