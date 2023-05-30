import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState =  { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        decrement(state, action) {
            state.counter = state.counter - action.payload;
        },
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

const initialAuthState = { isLoggedIn: false }

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    }
})

const centralStore = configureStore({
    reducer: { 
        counter: counterSlice.reducer,
        authentication: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default centralStore;