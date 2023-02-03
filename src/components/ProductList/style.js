import styled from "styled-components";

const List = styled.ul`
    display: flex;
    gap: 20px;
    overflow: auto;
    padding-bottom: 1rem;
    ::-webkit-scrollbar {
        height: 0px;
    }
`

export default List