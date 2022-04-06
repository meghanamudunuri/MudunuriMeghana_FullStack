
const initialstate = {
    cart : []
}
export default function cartReducer(state = initialstate , action){
    switch(action.type){
        case "ADDTOCART" :{
            const newState = {...state, cart : [...state.cart,action.payload]}
            return newState;
        }
        
        default : 
            return state;
    }
}