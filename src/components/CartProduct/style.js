import styled from "styled-components";

const Li = styled.li`

    display: flex;
    gap: 15px;

    img {
        background-color: var(--grey-20);
        width: 70px;
        height: 70px;
        border-radius: 8px;
    }

    .productInfoContainer {
        display: flex;
        width: calc(100% - 70px);
        justify-content: space-between;
        align-items: flex-start;
    }

    button.removeButton {
        border: 0;
        background-color: transparent;
        color: #BDBDBD;
        cursor: pointer;
    }
    
    button.removeButton:hover {
        text-decoration: underline;
    }

`

export default Li;