import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const centralStore = configureStore({
    reducer: { 
        counter: counterReducer,
        authentication: authReducer
    }
});

export default centralStore;