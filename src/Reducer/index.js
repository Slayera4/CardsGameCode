import gameReducer1 from './gameReducer1'
import gameReducer2 from './gameReducer2'
import gameReducer3 from './gameReducer3'
import translates from './translates'
import {combineReducers} from 'redux'



const Reducers = combineReducers({
    Game1: gameReducer1,
    Game2: gameReducer2,
    Game3: gameReducer3,
    translates,
});
export default Reducers