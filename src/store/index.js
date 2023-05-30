import { createStore } from 'redux';

const reducerFunction = (state = { counter: 0}, action) => {
    if(action.type === 'incrementBy2') {
        return {
            counter: state.counter + 2
        }
    }
    else if(action.type === 'decrementBy2') {
        return {
            counter: state.counter - 2
        }
    } else {
        state;
    }
}

const centralStore = createStore();

export default centralStore;