import styled from "styled-components";

const List = styled.ul`
    display: flex;
    gap: 20px;
    overflow: auto;
    padding-bottom: 1rem;
    /* margin-left: 2rem; */
    ::-webkit-scrollbar {
        height: 0px;
    }

    @media (min-width: 1200px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

export default List