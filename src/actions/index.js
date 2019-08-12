import axios from 'axios';

const ROOT_URL = `http://localhost:9000`;



export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const SELECT_ALL_CHECKBOXES = 'SELECT_ALL_CHECKBOXES';
export const CLEAR_ALL_CHECKBOXES = 'CLEAR_ALL_CHECKBOXES';

export const FETCH_STATUS = 'FETCH_STATUS';




export function fetchStatus() {

    const request1 = axios.get(`${ROOT_URL}/v1/gs/getStatusMetaData`);

    console.log("fetchConfig::request")
    console.log(request1)


    return {
        type: FETCH_STATUS,
        payload: request1
    };


}










export function updateCheckbox(stageName, axisName, isChecked) {

    console.log('updateCheckboxes called');

    return {
        type: UPDATE_CHECKBOX,
        payload: { stageName: stageName, axisName: axisName, isChecked: isChecked }
    }
}

export function clearAllCheckboxes() {

    console.log('clearCheckboxes called');

    return {
        type: CLEAR_ALL_CHECKBOXES,
        payload: {  }
    }
}

export function selectAllCheckboxes(stageAxisList) {

    console.log('selectAllCheckboxes called');

    return {
        type: SELECT_ALL_CHECKBOXES,
        payload: stageAxisList
    }
}