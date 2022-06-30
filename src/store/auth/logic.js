import {createLogic} from 'redux-logic';
import get from 'lodash/get';
import {login, loginFail, loginSuccess} from './slice';

const loginLogic = createLogic({
  type: login.type,
  latest: true,

  async process({action}, dispatch, done) {
    try {
      const {username} = action.payload;

      dispatch(loginSuccess(username));
    } catch (err) {
      dispatch(loginFail(get(err, 'response.data.data.message', err.message)));
    } finally {
      done();
    }
  },
});

export default [loginLogic];
