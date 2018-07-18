import axios from 'axios';

import { ROOT_URL } from '../config';
import { STORE_USER } from './types';

export function signUp(fields, success) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signUp`, fields)
        .then(response => {
            console.log(response);
            dispatch({
            type: STORE_USER,
            payload: response.data})
            success();

        })
        .catch(err =>{
            if(err) {console.log(err) }
        })
    }
}