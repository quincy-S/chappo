import styled from "styled-components";

const StyledStatCard = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0.7rem 0;

    img{
        max-width:100%;
        height:auto;
    }

    span{
        padding-left:1rem;
    }

    h3{
        color: #FFFFFF;
        font-size:1.5rem;
        line-height:2rem;
    }

    p{
        color: rgb(156,163,175);
        font-size:.75rem;
    }
`

export default StyledStatCard