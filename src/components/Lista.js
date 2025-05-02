import Item from './Item'


function Lista(){
    return(
        <div>
            <h1>Minha Lista</h1>
            <ul>
                <Item produto = "camisa" tamanho = "M" />
                <Item produto = "calça" tamanho = "G" />
                <Item produto = "cropped" tamanho = "P" />
                <Item produto ="camiseta" tamanho = "M"/>

            </ul>
        </div>
    )
}

export default Lista