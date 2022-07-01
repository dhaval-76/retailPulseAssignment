import {createLogic} from 'redux-logic';
import get from 'lodash/get';

import {searchOutlet, searchOutletFail, searchOutletSuccess} from './slice';
import dummyData from '../../assests/dummyData.json';

const searchOutletLogic = createLogic({
  type: searchOutlet.type,
  latest: true,

  async process({action}, dispatch, done) {
    try {
      const {outletCode} = action.payload;
      const res = dummyData.filter(item => item.outlet_code === outletCode);

      if (res.length === 0) {
        throw new Error('No Outlets results found');
      } else {
        dispatch(searchOutletSuccess(res));
      }
    } catch (err) {
      dispatch(
        searchOutletFail(get(err, 'response.data.data.message', err.message)),
      );
    } finally {
      done();
    }
  },
});

export default [searchOutletLogic];
