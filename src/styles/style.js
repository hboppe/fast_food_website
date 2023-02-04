import styled from 'styled-components';

const Main = styled.main`
    padding: 1rem;

    @media (min-width: 1200px){
        display: flex;
        padding: 0 2rem;
        max-width: 1470px;
        justify-content: space-between;
        gap: 30px;
        margin: 31px auto;
    }
`

export default Main;