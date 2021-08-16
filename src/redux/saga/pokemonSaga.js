import { takeLatest, put, fork, all, take, call, delay } from "@redux-saga/core/effects";
import { PokemonApi } from "../../api";
import { get10Pokemon, getthisPokemon } from "../../api/pokeApi";
import { getPokemonFailedAction, getPokemonSuccessAction, getThisPokemonFailedAction, getThisPokemonSuccessAction, GET_CONCURRENT_POKEMON_REQUEST, GET_CONCURRENT_POKEMON_REQUEST_2, GET_CONCURRENT_POKEMON_REQUEST_3, GET_CONCURRENT_POKEMON_REQUEST_4, GET_POKEMON_REQUEST, GET_THIS_POKEMON_REQUEST } from "../ducks-reducer/pokemon/pokemonAction";


function* requestPokemonData() {
    try {

        const poke10 = yield call(PokemonApi.getPokemonList)
        yield put(getPokemonSuccessAction(poke10))
        return poke10;

    } catch (error) {
        yield put(getPokemonFailedAction(error));

        return error;
    }
}


function* watchPokemonRequest() {
    yield takeLatest(GET_POKEMON_REQUEST, requestPokemonData)
}

// <<<<<<<<<<<

function* requestThisPokemon(action) {
    try {

        const thispoke = yield call(PokemonApi.getSinglePokemon, action.payload);

        yield put(getThisPokemonSuccessAction(thispoke))

        return thispoke

    } catch (error) {

        yield put(getThisPokemonFailedAction(error))

        return error
    }
}

function* watchThisPokemonRequest() {
    yield takeLatest(GET_THIS_POKEMON_REQUEST, requestThisPokemon)
}

// <<<<<<<<<<< concurrent version 1 , direct call api in call effects


function* concurrentrequestThisPokemon(action) {


    const [singlePoke, listPoke] = yield all([
        call(PokemonApi.getSinglePokemon, action),
        call(PokemonApi.getPokemonList)
    ])

    yield put(getThisPokemonSuccessAction(singlePoke));
    yield delay(4000);
    yield put(getPokemonSuccessAction(listPoke))
}

function* watchConcurrentPokemonRequest() {
    yield takeLatest([GET_CONCURRENT_POKEMON_REQUEST], concurrentrequestThisPokemon)
}

// <<<<<<<<<<< concurrent version 2 , direct call api in call effects


function* concurrentrequestThisPokemon_2(action) {
    try {


        const [singlePoke, listPoke] = yield all([
            call(requestThisPokemon, action),
            call(requestPokemonData)
        ])

        console.log("\n\n=====\n")
        console.log("singlePoke ->", singlePoke)
        console.log("listPoke ->", listPoke)
        console.log("\n\n=====\n")

        if(singlePoke?.status === 200 && listPoke?.status === 200 ){
            console.log("jadi")
        }else{
            console.log("tak jadi")
        }

    } catch (error) {
        console.log("\n\n errrror ->", error)
    }

}

function* watchConcurrentPokemonRequest_2() {
    yield takeLatest([GET_CONCURRENT_POKEMON_REQUEST_2], concurrentrequestThisPokemon_2)
}

// <<<<<<<<<<< concurrent version 3 , using forks 

function* concurrentrequestThisPokemon_3(action) {

    const task1 = yield fork(requestThisPokemon, action)
    const task2 = yield fork(requestPokemonData)

    // console.log("\n\ntask2 ->",task2, '\n\n')

}

function* watchConcurrentPokemonRequest_3() {
    yield takeLatest([GET_CONCURRENT_POKEMON_REQUEST_3], concurrentrequestThisPokemon_3)
}


// <<<<<<<<<<< concurrent version 4 , using call 

function* concurrentrequestThisPokemon_4(action) {


    try {


        const task1 = yield call(PokemonApi.getSinglePokemon, action.payload)
        const task2 = yield call(PokemonApi.getPokemonList)

    } catch (error) {
        console.log("\n\n errrror 4->", error)
    }   

    // console.log("\n\ntask2 ->",task2, '\n\n')

}

function* watchConcurrentPokemonRequest_4() {
    yield takeLatest([GET_CONCURRENT_POKEMON_REQUEST_4], concurrentrequestThisPokemon_4)
}

// <<<



export default function* pokemonRootSaga() {
    yield all([
        fork(watchPokemonRequest),
        fork(watchThisPokemonRequest),
        fork(watchConcurrentPokemonRequest),
        fork(watchConcurrentPokemonRequest_2),
        fork(watchConcurrentPokemonRequest_3),
        fork(watchConcurrentPokemonRequest_4)
    ])
}

