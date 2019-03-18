import axios from 'axios'

export const GETTING_DATA = 'GETTING_DATA';
export const GET_DATA = 'GET_DATA';

export const CREATING_DATA = 'CREATING_DATA';
export const CREATE_DATA = 'CREATE_DATA';

export const UPDATING_DATA = 'UPDATING_DATA';
export const UPDATE_DATA = 'UPDATE-DATA';

export const DELETING_DATA = 'DELETING_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const ERROR = 'ERROR';


export const getData = () => {
    const inmate_info = axios.get('https://jsonplaceholder.typicode.com/users')
    return dispatch => {
        dispatch({ type: GETTING_DATA });
        inmate_info
        .then(res => {
            console.log(res)
            dispatch({ type: GET_DATA, payload: res})
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err})
        })
    }
}

