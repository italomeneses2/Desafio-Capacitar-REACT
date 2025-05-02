function evento(){
    function meuEvento(){
        console.log("Evento funcionando")
    }
    return(
        <div>
            <h1>Testando Evento</h1>
            <p>Clique aqui para disparar o Evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default evento;