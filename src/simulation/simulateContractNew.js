export default (request, contracts) => {
    /*
    recibe:
        1. request - Object 
        2. contracts - [Object]
    devuelve:
        [Object] 
    */

    
    const c = {...request}

    c.id = contracts.length

    // annadirlo a lista de Contracts
    const newContracts  = [...contracts]
    
    newContracts.push( c )

    return newContracts

}