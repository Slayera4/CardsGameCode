import BuildDeck from '../utils/index'
let N = 4;
const initialState = {
    numberAttempts:0,
    hits: 0,
    deck:BuildDeck(N),
    selectedCouple: [],
    isComparing: false,

    
}


export default function (state = initialState, action = {}){
    

    
    switch(action.type){

        case "EASY" :
        return {...state}

        case "HARD":
        return {...state,
                deck: BuildDeck(N=16)}

        case "SUPERHARD":
        return {...state,
                deck: BuildDeck(N=20)}
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
                 deck: BuildDeck(N),
                 selectedCouple: [],
                 isComparing: false,
                 numberAttempts:0,
                 hits: 0,
         }
         case "RESET1":
         return{
            ...state,
            deck: BuildDeck(N),
            selectedCouple: [],
            isComparing: false,
            
         }

         case "RESET2":
         return{
             ...state,
             numberAttempts:0,
             hits: 0,

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