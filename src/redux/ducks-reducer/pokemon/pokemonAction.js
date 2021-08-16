const NAMESPACE = 'POKEMON'

export const GET_POKEMON_REQUEST = `${NAMESPACE}/GET_POKEMON_REQUEST`;
export const GET_POKEMON_SUCCESS = `${NAMESPACE}/GET_POKEMON_SUCCESS`;
export const GET_POKEMON_FAILED = `${NAMESPACE}/GET_POKEMON_FAILED`;

export function getPokemonRequestAction(){
    return {type: GET_POKEMON_REQUEST}   
}

export function getPokemonSuccessAction(payload){
    return {type: GET_POKEMON_SUCCESS, payload}   
}

export function getPokemonFailedAction(payload){
    return {type: GET_POKEMON_FAILED, payload}   
}

// --- 

export const GET_THIS_POKEMON_REQUEST = `${NAMESPACE}/GET_THIS_POKEMON_REQUEST`;
export const GET_THIS_POKEMON_SUCCESS = `${NAMESPACE}/GET_THIS_POKEMON_SUCCESS`;
export const GET_THIS_POKEMON_FAILED = `${NAMESPACE}/GET_THIS_POKEMON_FAILED`;


export function getThisPokemonRequestAction(payload){
    return {type: GET_THIS_POKEMON_REQUEST, payload}   
}

export function getThisPokemonSuccessAction(payload){
    return {type: GET_THIS_POKEMON_SUCCESS, payload}   
}

export function getThisPokemonFailedAction(payload){
    return {type: GET_THIS_POKEMON_FAILED, payload}   
}


// --- 

export const GET_CONCURRENT_POKEMON_REQUEST = `${NAMESPACE}/GET_CONCURRENT_POKEMON_REQUEST`;

export function getConcurrentThisPokemonRequestAction(payload){
    return {type: GET_CONCURRENT_POKEMON_REQUEST, payload}   
}

// --- v2

export const GET_CONCURRENT_POKEMON_REQUEST_2 = `${NAMESPACE}/GET_CONCURRENT_POKEMON_REQUEST_2`;

export function getConcurrentThisPokemonRequestAction_2(payload){
    return {type: GET_CONCURRENT_POKEMON_REQUEST_2, payload}   
}


// --- v3

export const GET_CONCURRENT_POKEMON_REQUEST_3 = `${NAMESPACE}/GET_CONCURRENT_POKEMON_REQUEST_3`;

export function getConcurrentThisPokemonRequestAction_3(payload){
    return {type: GET_CONCURRENT_POKEMON_REQUEST_3, payload}   
}

// --- v4

export const GET_CONCURRENT_POKEMON_REQUEST_4 = `${NAMESPACE}/GET_CONCURRENT_POKEMON_REQUEST_4`;

export function getConcurrentThisPokemonRequestAction_4(payload){
    return {type: GET_CONCURRENT_POKEMON_REQUEST_4, payload}   
}

