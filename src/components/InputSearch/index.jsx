import Button from '../Button';
import {Input, Div} from './style'

function InputSearch({input, setInput}){


    return (
        
        <Div>
            <Input placeholder='Digite sua pesquisa' autoComplete='off' value={input} onChange={(e) => setInput(e.target.value)}/>
            <Button>Pesquisar</Button>
        </Div>  
    )
}

export default InputSearch

