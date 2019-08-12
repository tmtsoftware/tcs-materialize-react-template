import { combineReducers } from 'redux';

import TcsAssembliesStatusReducer from './reducer_tcs_assemblies_status';


const rootReducer = combineReducers({


    tcsAssembliesStatus: TcsAssembliesStatusReducer,


});

export default rootReducer;
