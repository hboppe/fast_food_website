import InputSearch from "../InputSearch";
import Logo from "../Logo";
import { StyledHeader } from "./style";



function  Header(){
    return (
        
        <StyledHeader>
            <Logo/>
            <InputSearch/>
        </StyledHeader>
            
    )
}

export default Header;