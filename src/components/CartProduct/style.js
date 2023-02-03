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
        align-items: baseline;
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

    .nameAndCategoryContainer {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .nameAndCategoryContainer > small {
        color: var(--grey-50);
    }

    .productQuantityContainer {
        width: 65px;
        display: flex;
        justify-content: space-between;
        background-color: white;
    }

    .productQuantityContainer > button {
        padding: 0px 3px;
        font-weight: bold;
        cursor: pointer;
        border: 2px solid var(--grey-20);
        background-color: var(--grey-20);
        color: var(--grey-50);
    }

    .quantityAndRemoveContainer {
        display: flex;
        gap: 40px;
    }

`

export default Li;