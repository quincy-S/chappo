import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    button,a{
        cursor:pointer;
    }

    body{
        background:hsla(240, 54%, 11%, 1);
        font-family:'Rubik', sans-serif;
    }
`

export default GlobalStyles