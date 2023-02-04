import styled from "styled-components";

const Input = styled.input`
    font-size: 1rem;
    border: none;

    &:focus{
        outline: none;
    }

`

const Div = styled.div`
    background-color: #ffffff;
    display: flex;
    border: 2px solid var(--grey-20);
    padding: 10px;
    justify-content: space-between;
    border-radius: 8px;
`
export {Input, Div}; 