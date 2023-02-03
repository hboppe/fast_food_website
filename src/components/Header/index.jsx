import InputSearch from "../InputSearch";
import Logo from "../Logo";
import { StyledHeader } from "./style";



function  Header({input, setInput}){


    return (
        
        <StyledHeader>
            <Logo/>
            <InputSearch input={input} setInput={setInput}/>
        </StyledHeader>
            
    )
}

export default Header;