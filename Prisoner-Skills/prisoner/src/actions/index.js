import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';

export const GETTING_DATA = 'GETTING_DATA';
export const GET_DATA = 'GET_DATA';

export const CREATING_DATA = 'CREATING_DATA';
export const CREATE_DATA = 'CREATE_DATA';

export const UPDATING_DATA = 'UPDATING_DATA';
export const UPDATE_DATA = 'UPDATE-DATA';

export const DELETING_DATA = 'DELETING_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const SINGLE_INMATE = 'SINGLE_INMATE';
export const TOGGLE_UPDATE_INMATE = 'TOGGLE_UPDATE_INMATE';

export const ERROR = 'ERROR';


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:3333/items', creds).then(res => {
      localStorage.setItem('token', res.data.payload);
    });
  };



export const getData = () => {
    const inmates = axios.get('http://localhost:3333/items')
    return dispatch => {
        dispatch({ type: GETTING_DATA });
        inmates
        .then(res => {
            console.log("making it here")
            dispatch({ type: GET_DATA, payload: res.data})
        })
        
        .catch(err => {
            dispatch({ type: ERROR, payload: err})
        })
    }
}


export const createData = inmate => {
    const newInmate = axios.post('http://localhost:3333/items', inmate);
    return dispatch => {
        dispatch({ type: CREATING_DATA });
        newInmate
        .then(({ data }) => {
            dispatch({ type: CREATE_DATA, payload: data})
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err})
        })
    }
}


export const toggleShowUpdate = () => {
    return {
        type: TOGGLE_UPDATE_INMATE
    }
}

export const updateSingleInmate = inmate => {
    return {
        type: SINGLE_INMATE,
        payload: inmate
    }
}


export const deleteData = id => {
    const deletedInmate = axios.delete('https://jsonplaceholder.typicode.com/users/delete', {
        data: {id}
    });
    return dispatch => {
        dispatch({ type: DELETING_DATA });
        deletedInmate
        .then(({data}) => {
            dispatch({type: DELETE_DATA, payload: data });
        })
        .catch(err => {
            dispatch({type: ERROR, payload: err})
        })
    }
}