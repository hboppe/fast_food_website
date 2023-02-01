import Button from '../Button';
import {Input, Div} from './style'


function InputSearch(){

    return (
        
        <Div>
            <Input placeholder='Digite sua pesquisa' autoComplete='off'/>
            <Button>Pesquisar</Button>
        </Div>  
    )
}

export default InputSearch

