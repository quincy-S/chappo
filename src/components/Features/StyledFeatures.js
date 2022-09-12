import styled from "styled-components";

const StyledFeatures = styled.div`
    margin: 0 auto;

    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    padding:0 1rem;

    @media (min-width:780px){
       max-width:800px;
       padding: 1rem 2rem;
    }

    

     @media (min-width:1200px){
        max-width: 1200px;
    }
      
`

export const StyledTitle = styled.div`
    

    h1{
        margin:3rem 0;
        color:white;
        text-align:center;
        font-size:1.5rem;
        line-height:2rem;
        font-weight:lighter;
    } 

    @media (min-width:1024px){
        ${'' /* padding:0 12rem; */}
        h1{
            font-size:2.5rem;
            line-height:3rem;
            margin:3rem 5rem;
        }
     }
`

export const StyledItem= styled.div`
     @media (min-width:768px){
        display:flex;
        align-items:center;
        flex-direction:column;
        justify-content:center;
        column-gap:3rem;
     }

     @media (min-width:1024px){
        column-gap:2rem;
        flex-direction:row;
        ${'' /* row-gap:7rem; */}
        margin-bottom:2rem;
     }
`

export const StyledText = styled.div`

    flex:1 1;
    @media (min-width:768px){
       width:70%;
    }
    padding:1rem;
       

    h2{
        margin-top:4rem;
        color:white;
        ${'' /* text-align:center; */}
        font-size:1.5rem;
    }

    p{
        margin-top:1.8rem;
        color: rgb(156, 163, 175);
        font-size:0.8rem;
    }

    button{
        margin-top:1.8rem;
        border-radius:5rem;
        color:white;
        border:none;
        padding:0.5rem 1.2rem;
        background-color:rgb(59,130,246)
    }
`

export const StyledImage = styled.div`
    flex:1 1;
    margin-top:2rem;
    padding:0 0.8rem;

    img{
        max-width:100%;
    }

    @media (min-width:1024px){
        flex:1.4 1;
        order: ${props => props.number == 2 ? -1: ``};
     }
    
`

export default StyledFeatures