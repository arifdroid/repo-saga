import { all, fork } from "@redux-saga/core/effects";
import counterSagaRoot from "./counterSaga";
import pokemonRootSaga from "./pokemonSaga";

export default function* rootSaga(){
    yield all([
        fork(counterSagaRoot),
        fork(pokemonRootSaga)
    ])
}