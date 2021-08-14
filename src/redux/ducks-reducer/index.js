import {combineReducers} from 'redux';

import counter from './counterReducer';
import pokemon from './pokemon/pokemonReducer';


// root Reducer

export default rootReducer = combineReducers({
    counter,
    pokemon
})