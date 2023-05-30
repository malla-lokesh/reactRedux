import { createStore } from 'redux';

const reducerFunction = (state = { counter: 0}, action) => {
    if(action.type === 'incrementBy5') {
        return {
            counter: state.counter + 5
        }
    }
    else if(action.type === 'decrementBy5') {
        return {
            counter: state.counter - 5
        }
    } else {
        return state
    }
}

const centralStore = createStore(reducerFunction);

export default centralStore;