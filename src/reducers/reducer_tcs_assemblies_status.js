import {FETCH_STATUS} from '../actions/index';






export default function(state = [], action) {

    if (action.type.startsWith(FETCH_STATUS)) {

        console.log("reducer assembly config called");

        console.log(action.payload);

        const payload = action.payload.data.paramSet[0].values;

        console.log(payload);

        return payload;

    }

    return state;
}