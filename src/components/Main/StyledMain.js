import styled from "styled-components";

const StyledMain = styled.div`
    margin:0 auto;
    padding:1rem;

    @media (min-width:780px){
       max-width:800px;
       padding: 1rem 2rem;
    }
    
    @media (min-width:1024px){
       max-width:1024px;
    }

    @media (min-width:1200px){
        max-width: 1200px;
    }

`

export const StyledStatistics = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    


    @media (min-width: 1025px){
        margin-top:2rem;
        flex-direction:row;
        justify-content:space-between;

        img{
            width:3rem;
        }
    }
   
`

export const StyledSection = styled.div`
    gap:1.5rem;
    display:flex;
    align-items:center;
    flex-direction:column;

    @media (min-width:1024px){
        flex-direction:row;
    }
    
`

export const StyledInfo = styled.div`
    flex:1 1;
    margin-top:3rem;

    h2{
        color:white;
        font-size:2.2rem;
        font-weight:lighter;
    }

    p{
        color:rgb(156,163,175);
        margin-top:0.8rem;
        line-height:1.8rem;
    }

    button{
        font-size:1rem;
        margin-top:1.3rem;
        border-radius:5rem;
        color:white;
        border:none;
        padding:0.5rem 1rem;
        background-color:rgb(59,130,246);
    }

    
    @media (min-width:1024px){
        h2{
            font-size:2.5rem;
        }

    }
`

export const StyledImageSection = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1 1;
    
    img{
        height:auto;
        max-width:100%;
    }

    @media (min-width:1024px){
       order: -1;
       img{
            height:auto;

        }
    }
`

export const StyledCalcSection = styled.div`
    margin-top:4rem;

    h3{
        text-align:center;
        color:white;
        font-size:1.5rem;
        line-height:2.2rem;
    }

    p{
        margin-top:1rem;
        font-size:0.7rem;
        text-align:center;
        color:rgb(156,163,175);
    }

`

export const StyledForm = styled.div`
    position:relative;
    margin-top:2rem;
    padding:0 1.5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:0.5rem;
    background:white;
    border-radius:1rem;
    margin-bottom:-7rem;
    z-index:3;
    margin-left:auto;
    margin-right:auto;    
`

export const StyledFormText = styled.div`
    width:100%;
        

    h6{
       padding:1.5rem 0;
       ${'' /* color:red;  */}
       margin-right:auto;
       font-size:1rem;
       font-weight:lighter;
    }

    h2{
        margin-right:auto;
        font-size:2rem;
        margin-bottom:1.2rem;
    }

    h5{
        margin-right:auto;
        color: hsla(220, 80%, 56%, 1);
        opacity:0.8;
        font-size:16px;
        letter-spacing:0.04em;
        line-height:24px;
        font-weight:500;
        margin-bottom:1rem;
    }

    h4{
        margin-right:auto;
        font-size:1.8rem;
        color:rgb(59,130,246);
    }

    @media (min-width:1024px){
       padding-left:32px;
       margin-right:auto;
       max-width:54rem;

       img{
            height:auto;
        }
    }
`

export const StyledFormInputs = styled.div`
    ${'' /* border:2px solid red; */}
    width:100%;

    input, select{
        ${'' /* font-color: */}
        font-size:1.5rem;
        width:100%;
        display:block;
        margin-top:1.5rem;
        font-size:1.3rem;
        ${'' /* margin:0rem 0; */}
        outline: 0;
        border-width:0 0 1px;
        border-color:rgb(224,224,224);
    }

    select{
        margin-top:3rem;
    }

    button{
        font-size:1.3rem;
        margin-right:auto;
        margin:3rem auto 3rem 0;
        border-radius:5rem;
        color:white;
        border:none;
        padding:0.5rem 2rem;
        background-color:rgb(59,130,246);
    }

    @media (min-width:1024px){
        padding:0rem 2rem;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:1rem;

       input{
        width: 50%;
        margin:0;
        font-size:1.7rem;
       }

       select{
        width:25%;
        margin:0;
        font-size:1.7rem;
       }

       button{
        width:20%;
       }
    }

`



export default StyledMain