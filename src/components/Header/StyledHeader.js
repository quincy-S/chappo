import styled from "styled-components";

const StyledHeader = styled.div`
    margin: 0 auto;
    padding: 1rem;
    
    nav{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }


    @media (min-width:1024px){
        max-width: 1024px;
    }

    @media (min-width:1200px){
        max-width: 1200px;
    }

    @media (max-width: 380px){
        padding:1rem;
    }
`

export const StyledNavItems = styled.div`
    display:none;
    
    @media (min-width:1024px){
        font-size:1rem;
        column-gap:3.5rem;
        color:white;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-left:auto;
    }
`

export const StyledLinks = styled.div`
     display:flex;
     column-gap:2rem;
`

export const StyledButtons = styled.div`
        color:white;
        column-gap:2rem;
        display:flex;
        align-items:center;

    button{
        color:white;
        padding:0.5rem 1.5rem;
        border-radius:1.5rem;
        background-color:rgb(59, 130, 246);
    }

    span{
        color: hsla(0,0%,100%,.2);
    }
`

export const StyledSection = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin-top:0rem;
    

    @media (min-width:780px){
        padding:1rem 6rem;
        margin-top:0;
    }

    @media (min-width:1024px){
        margin-top:1.5rem;
        padding:0;
        flex-direction:row;
    }

    @media (max-width: 380px){
        margin-top:0;
    }
`

export const StyledInfoSection = styled.div`
    flex:1 1;

    button{
        margin-top: 2.5rem;
        color:white;
        border:none;
        width:8rem;
        display:flex;
        padding:0.5rem 0.5rem;
        justify-content:center;
        padding-left:0.8rem;
        align-items:center;
        border-radius:1.75rem;
        background: hsla(220, 80%, 56%, 1);
    }

    h1{
        font-size:2.1rem;
        color:white;
        margin:1.5rem 0;
    }

    p{
        color: hsla(0, 0%, 88%, 1);
        font-size:0.75rem;
    }

    img{
        margin-left:auto;
        width:1rem;
    }

    
    @media (min-width:1024px){
       margin-top:1rem;
       align-self:flex-start;
       line-height:1;
       
       h1{
        font-size:3rem;
       }

    }

`

export const StyledImageSection = styled.div`
    flex:1 1;

    img{
        max-width:100%;
        object-fit:cover;
       
    }

    @media (min-width:1024px){
       img{
        width:80%;
       }
    }
`

export const StyledDiscount = styled.div`
    margin-top:2rem;
    background:rgba(255, 255, 255, 0.1);
    display:flex;
    padding:4px;
    align-items:center;
    max-width:18rem;
    font-size:0.75rem;
    justify-content:space-between;
    border-radius:32px;

    p{
        padding:0 0.5em;
        color:white;
        font-weight:400;
    }

    span{
        background:#FFFFFF;
        color:hsla(240, 54%, 11%, 1);
        border-radius:32px;
        padding:0.25rem 1rem;
        
    }
`

export default StyledHeader