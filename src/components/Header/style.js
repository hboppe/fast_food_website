import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-0);
    padding: 1.4375rem 1rem 0.875rem;
    
    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        min-width: 382px;
        width: 100%;
        max-width: 1450px;
        padding: 0px 32px;
    }

    @media (min-width: 992px){
        nav {
            flex-direction: row;
            /* width: 100%; */
            justify-content: space-between;
            /* margin: 0 2rem; */
        }
    }

    @media (min-width: 1200px){
        nav {
            padding: 0 2rem;
        }

    }
`

export {StyledHeader}