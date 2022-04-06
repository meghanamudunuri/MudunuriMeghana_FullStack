import { createStore, combineReducers,applyMiddleware} from 'redux';
import cartReducer from '../Reducers/AddcartReducer';
import counterReducer from '../Reducers/CounterReducer';
import  ThunkMiddleware  from 'redux-thunk';

const Reducers = combineReducers ({
    counters : counterReducer,
    carts : cartReducer
   
})
let store = createStore(Reducers,applyMiddleware(ThunkMiddleware));

export default store;