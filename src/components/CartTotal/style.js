import styled from "styled-components";

const Total = styled.div`
    padding: 0px 1.125rem 20px;
    display: flex;
    flex-direction: column;
    gap: 21px;
    background-color: var(--grey-0);

    hr {
        height: 1px;
        border: none;
        background-color: var(--grey-20);
    }

    .totalContainer > span:first-child {
        color: var(--grey-100);
    }

    .totalContainer {
        font-weight: bold;
        color: var(--grey-50);
        display: flex;
        justify-content: space-between;
    }

    button {
        padding: 20px;
        font-size: 1rem;
        font-weight: bold;
        color: var(--grey-50);
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background-color: var(--grey-20);
        transition: .5s ease-in-out;
    }

    button:hover {
        background-color: var(--grey-50);
        color: var(--grey-20);
    }

    
`

export default Total;