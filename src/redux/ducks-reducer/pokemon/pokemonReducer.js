import { GET_POKEMON_FAILED, GET_POKEMON_REQUEST, GET_POKEMON_SUCCESS, GET_THIS_POKEMON_FAILED, GET_THIS_POKEMON_REQUEST, GET_THIS_POKEMON_SUCCESS } from "./pokemonAction"

const initialState = {
    isFetching: false,
    data: {},
    pokeid:null,
    singleData:{}
}

export default pokemonReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POKEMON_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case GET_POKEMON_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }

        case GET_POKEMON_FAILED:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }

        case GET_THIS_POKEMON_REQUEST:
            return {
                ...state,
                pokeid:action.payload,
                isFetching: true
            }
        case GET_THIS_POKEMON_SUCCESS:
            return {
                ...state,
                singleData: action.payload,
                isFetching: false
            }

        case GET_THIS_POKEMON_FAILED:
            return {
                ...state,
                singleData: action.payload,
                isFetching: false
            }

        default:
            return state;
    }
}