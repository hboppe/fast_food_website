import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`


    *{
        padding: 0px;
        margin: 0px;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;;
    }

    :root {
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secundary: #EB5757;

        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-sucess: #168821;
        --color-information: #155BCB;

        --font-size-h1: 1.625rem;
        --font-size-h2: 1.375rem;
        --font-size-h3: 1.125rem;
        --font-size-h4: 0.875rem;
        --font-size-body: 0.875rem;
        --font-size-caption: 0.75rem;

    }
  
`

export default Global