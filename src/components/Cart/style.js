import styled from "styled-components";

const Aside = styled.aside`
    border-radius: 8px;
    min-width: 415px;
    max-width: 465px;
    margin: 1rem auto;

    .cartTitle {
        background-color: var(--color-primary);
        color: #ffffff;
        font-size: var(--font-size-h3);
        padding: 1.0625rem 1.25rem;
        border-radius: 8px 8px 0px 0px;
    }

    .emptyCartWarning {
        background-color: var(--grey-0);
        padding: 50px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border-radius: 0px 0px 8px 8px;
    }

    .cartList{
        padding: 20px 18px;
        background-color: var(--grey-0);
        display: flex;
        flex-direction: column;
        gap: 21px;
    }

    @media (min-width: 1200px){
        width: 410px;
        margin-top: 0;
        margin-right: 2rem;
    }
    
`

export default Aside;