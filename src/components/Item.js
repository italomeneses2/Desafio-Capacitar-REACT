import PropTypes from 'prop-types'

function Item({produto, tamanho}){
    return(
        <>
            <li>
                {produto} - {tamanho}
            </li>
            
        </>
    )
}

Item.propTypes = {
    produto: PropTypes.string.isRequired,
    tamanho: PropTypes.string.isRequired,
}

Item.defaultProps = {
    produto: "Produto indisponível",
    tamanho: "0",
}

export default Item