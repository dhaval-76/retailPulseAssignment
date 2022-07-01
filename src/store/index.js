import {configureStore} from '@reduxjs/toolkit';
import {createLogicMiddleware} from 'redux-logic';

import baseAxios from '../services/axios';

import authReducer from './auth/slice';
import authLogics from './auth/logic';

import outletReducer from './outlet/slice';
import outletLogics from './outlet/logic';

const logicDependencies = {baseAxios};

const logicsArray = [...authLogics, ...outletLogics];

const logicMiddleware = createLogicMiddleware(logicsArray, logicDependencies);

const store = configureStore({
  reducer: {
    auth: authReducer,
    outlet: outletReducer,
  },
  middleware: [logicMiddleware],
});

export default store;
