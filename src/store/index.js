import {configureStore} from '@reduxjs/toolkit';
import {createLogicMiddleware} from 'redux-logic';

import baseAxios from '../services/axios';

import authReducer from './auth/slice';
import authLogics from './auth/logic';

const logicDependencies = {baseAxios};

const logicsArray = [...authLogics];

const logicMiddleware = createLogicMiddleware(logicsArray, logicDependencies);

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [logicMiddleware],
});

export default store;
