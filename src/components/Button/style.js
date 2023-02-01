import styled from "styled-components";

const StyledButton = styled.button`
    background-color: var(--color-primary);
    font-size: var(--font-size-h4);
    padding: 0.7188rem 1.25rem;
    border: none;
    color: #FFFFFF;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: .5s ease-in-out;

    &:hover {
        background-color: var(--color-primary-50);
        text-shadow: 1px 1px #00000036;
    }

`

export default StyledButton;