import { takeLatest, put, fork, all, take,call  } from "@redux-saga/core/effects";
import { PokemonApi } from "../../api";
import { get10Pokemon, getthisPokemon } from "../../api/pokeApi";
import { getPokemonFailedAction, getPokemonSuccessAction, getThisPokemonFailedAction, getThisPokemonSuccessAction, GET_CONCURRENT_POKEMON_REQUEST, GET_POKEMON_REQUEST, GET_THIS_POKEMON_REQUEST } from "../ducks-reducer/pokemon/pokemonAction";


function* requestPokemonData(){
    try {
  
       const poke10 = yield call(PokemonApi.getPokemonList)
    //    yield delay(4000);
       yield put(getPokemonSuccessAction(poke10))

    } catch (error) {
       yield put(getPokemonFailedAction(error)); 
    }
}


function* watchPokemonRequest(){
    yield takeLatest(GET_POKEMON_REQUEST, requestPokemonData)
}

// <<<<<<<<<<<

function* requestThisPokemon(action){
    try {

        const thispoke = yield call(PokemonApi.getSinglePokemon, action.payload);
        
        yield put(getThisPokemonSuccessAction(thispoke))

    } catch (error) {

        yield put(getThisPokemonFailedAction(error))        
    }
}

function* watchThisPokemonRequest(){
    yield takeLatest(GET_THIS_POKEMON_REQUEST, requestThisPokemon)
}

// <<<<<<<<<<<


function* concurrentrequestThisPokemon(action){
    try {

        // const thispoke = yield call(PokemonApi.getSinglePokemon, action.payload);
        // const poke10 = yield call(PokemonApi.getPokemonList)

        const [singlePoke, listPoke] = yield all([
            call(PokemonApi.getSinglePokemon, action.payload),
            call(PokemonApi.getPokemonList)
          ])

        yield put(getThisPokemonSuccessAction(singlePoke));
        delay(4000);
        yield put(getPokemonSuccessAction(listPoke))  
        // yield put(getThisPokemonSuccessAction(thispoke))
        // console.log("\n\n======\n")
        // console.log("singlepoke", singlePoke)
        // console.log("listPoke", listPoke)
        // console.log("\n======\n\n")

    } catch (error) {

        // yield put(getThisPokemonFailedAction(error))        
    }
}

function* watchConcurrentPokemonRequest(){
    yield takeLatest([GET_CONCURRENT_POKEMON_REQUEST], concurrentrequestThisPokemon)
}

export default function* pokemonRootSaga(){
    yield all([
        fork(watchPokemonRequest),
        fork(watchThisPokemonRequest),
        fork(watchConcurrentPokemonRequest)
    ])
}

