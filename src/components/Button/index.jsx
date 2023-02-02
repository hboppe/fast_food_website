import StyledButton from './style.js'

function Button ({children, onClick}){

    function handleClick(){
        console.log('oieeeee')
        onClick()
    }

    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}

export default Button;