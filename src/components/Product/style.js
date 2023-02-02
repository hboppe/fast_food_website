import styled from "styled-components";

const Li = styled.li`
    border: 2px solid var(--grey-20);
    min-width: 300px;
    border-radius: 8px;

    .imageContainer{
        background-color: var(--grey-0);
    }

    .productInfo {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
    }

    .productInfo > button {
        width: fit-content;
        margin-top: 0.625rem;
    }

    &:hover {
        border: 2px solid var(--grey-100);
    }

`

const ImageContainer = styled.div`
    background-image: ${props => `url(${props.img})`};
    height: 170px;
    background-repeat: no-repeat;
    background-position: bottom;
    background-color: var(--grey-20);
    background-size: contain;
    background-size: auto;

`

export {Li, ImageContainer}