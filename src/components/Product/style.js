import styled from "styled-components";

const Li = styled.li`
    border: 2px solid var(--grey-20);
    min-width: 300px;
    border-radius: 8px;
    height: fit-content;

    &:hover {
        border: 2px solid var(--grey-100);
    }

    .imageContainer{
        background-color: var(--grey-0);
    }

    .productInfo {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
    }

    .productInfo > small {
        color: var(--grey-50);
        font-size: var(--font-size-caption);
    }

    .productInfo > p{
        color: var(--color-primary);
        font-weight: 600;
    }

    .productInfo > button {
        width: fit-content;
        margin-top: 0.625rem; 
        background-color: var(--color-primary);
        font-size: var(--font-size-h4);
        padding: 0.7188rem 1.25rem;
        border: none;
        color: #FFFFFF;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        transition: .5s ease-in-out;

    }

    .productInfo > button:hover {
        background-color: var(--color-primary-50);
        text-shadow: 1px 1px #00000036;
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
    border-radius: 5px;

`

export {Li, ImageContainer}