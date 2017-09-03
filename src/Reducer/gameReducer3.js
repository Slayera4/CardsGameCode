import BuildDeck from '../utils/index'
const initialState = {
    numberAttempts:0,
    hits: 0,
    deck:BuildDeck(20),
    selectedCouple: [],
    isComparing: false,

    
}

export default function (state = initialState, action = {}){
    

    
    switch(action.type){


        case"SELECTED" : 
        return{
            ...state,
            selectedCouple: action.couple,
        }
        case"COMPARE" : 
            return{
                ...state,
                isComparing: true,
            }
        case "RESET": 

         return {
                 numberAttempts:0,
                 hits: 0,
                 deck: BuildDeck(20),
                 selectedCouple: [],
                 isComparing: false,
         }
        case "INC_HITS" :
            return{
                ...state,
                hits: state.hits + 1,
            }
        
        case "INC_ATTEMPTS": 
            return {
                ...state,
                numberAttempts: state.numberAttempts + 1,
                isComparing: false,
                selectedCouple: [],
            } 
        
        default:
            return state;
    }
}