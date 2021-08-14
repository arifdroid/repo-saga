import { delay, takeEvery, takeLatest, put , fork,all} from "@redux-saga/core/effects";
import { addSuccessAction, addSuccessDelayAction, ADD_REQUEST, ADD_REQUEST_DELAY, cancelAction } from "../ducks-reducer/counterReducer";



//define Saga : worker : add

function* increaseCounter(){
    try {

        console.log("saga 1")

        yield put(addSuccessAction(1))
        
    } catch (error) {
        
        yield(cancelAction())
    }
}


function* increaseDelayCounter(){
    try {

        yield delay(4000);

        yield put(addSuccessDelayAction(1))
        
    } catch (error) {
        
        yield(cancelAction())
    }
}

//define Saga : watcher : add

function* watchIncreaseCounter (){
    yield takeLatest(ADD_REQUEST, increaseCounter )
}

function* watchIncreaseDelayCounter (){
    yield takeLatest(ADD_REQUEST_DELAY, increaseDelayCounter )
}



export default function* counterSagaRoot(){
    yield all([
        fork(watchIncreaseCounter),
        fork(watchIncreaseDelayCounter)
        // fork(watchDecreaseCounter)    
            ])
}