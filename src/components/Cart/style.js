import styled from "styled-components";

const Aside = styled.aside`
    margin: 1rem;
    border-radius: 8px;

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
`

export default Aside;