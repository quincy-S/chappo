import styled from "styled-components";

const StyledFooter = styled.div`
padding:0 1rem 2rem 1rem;
margin: 0 auto;

    @media (min-width:820px){
       padding: 1rem 3rem; 
    }
    
    @media (min-width:1024px){
        max-width: 1024px;
    }

    @media (min-width:1200px){
        max-width: 1200px;
    }
`

export const StyledSection = styled.div`
    h1{
        font-weight:lighter;
        font-size:1.5rem;
    }

    p{
        margin-top:1.5rem;
        font-size: 0.8rem;
        font-weight:lighter;
        line-height:1.2rem;
    }

    @media (min-width:1024px){
        flex:1 1;
    }
`

export const StyledMiningCard = styled.div`
    margin-top:6rem;
    background-color: hsla(220, 80%, 56%, 1);
    border-radius:1rem;
    padding:2rem;
    color:white;
    display:flex;
    flex-direction: column;

    

    form{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }

    button{
        font-size:1.2rem;
        color: hsla(220, 80%, 56%, 1);
        margin-top:1.5rem;
        outline:none;
        border:none;
        padding: 0.5rem 1rem;
        border-radius:2rem;

    }

    @media (min-width:1024px){
        flex-direction:row;

        form{
            flex:1.5 1;
            ${'' /* border:2px solid red; */}
            ${'' /* display:flex; */}
            gap:2rem;
            align-items:center;
            justify-content:center;
            flex-direction:row;
    }
    }
`

export const StyledInput = styled.input`
        width:100%;
        display:block;
        margin-top:1.5rem;
        background:transparent;
        color:white;
        border-color:rgb(224,224,224);
        font-size:1.2rem;
        border-width:0 0 1px;
    

        ::placeholder,
        ::-webkit-input-placeholder {
            color: white;
            font-size:1.2rem;
        }
        :-ms-input-placeholder {
            color: white;
        }
    
`

export const StyledLinksSection = styled.div`
    margin-top:4rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (min-width:1024px){
        flex-direction: row;
        justify-content:space-between;
    }
`

export const StyledImages = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
    img{
        margin:3rem 1rem;
    }

    @media (max-width: 380px){
        margin:2rem 0;
        flex-direction:column;
        gap:2rem;
        
        img{
            margin:0;
        }
        ${'' /* gap:0rem; */}
    }
`

export const StyledCopyrightSection = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    h2{
        color:white;
        font-size:1rem;
    }

    @media (min-width:1024px){
        flex-direction:row;
        justify-content:space-between;
    }
`

export const StyledSocials = styled.div`
    margin:2rem 0;
    ${'' /* display:flex; */}
    ${'' /* justify-content:; */}
    ${'' /* align-items:center; */}

    img{
        margin:0 0.5rem;
        width:2rem;
    }
`

export const StyledLinks = styled.div`
    color:white;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;

    h2{
        margin-top:2rem;
        font-size:1rem;
        align-text:center;
    }

    p{
        font-size:1.35rem;
        line-height:1.75rem;
        margin-top:3.5rem;
        margin-bottom:1rem;
    }

    a{
        color: #e5e7eb;
        font-size:1rem;
        margin:1rem 0;
    }

    @media (min-width:1024px){
        align-items:flex-start;
    }
`



export default StyledFooter