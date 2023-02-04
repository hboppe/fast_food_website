import InputSearch from "../InputSearch";
import Logo from "../Logo";
import { StyledHeader } from "./style";

function  Header({input, setInput}){

    return (
        
        <StyledHeader>
            <nav>
            <Logo/>
            <InputSearch input={input} setInput={setInput}/>
            </nav>
        </StyledHeader>
            
    )
}

export default Header;