import logo from '../../assets/logo.svg'
import StyledLogo from './style';

function Logo(){

    return (
        <StyledLogo onClick={() => window.location.reload()}>
            <img src={logo} alt="Burguer Kenzie" />
        </StyledLogo>
        
    )

}

export default Logo;