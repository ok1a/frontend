import axios from 'axios';
import {
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  GET_USER_ID_FAIL,
  GET_USER_ID_SUCCESS,
} from './types.js';

export const getUsers = url => dispatch => {
  return axios
    .get(`${url}`)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
      // console.log('from res', res.data);
      // console.log('from env', process.env.REACT_APP);
    })
    .catch(error => {
      dispatch({
        type: GET_USERS_FAIL,
        payload: error,
      });
    });
};

export const addUserToSQL = (url, user) => dispatch => {
  return axios
    .post(`${url}`, user)
    .then(res => {
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_USER_FAIL,
        payload: error,
      });
    });
};

// GET USER ID FROM FIREBASE UID

export const getUserIdfromUUID = (url, uuid) => dispatch => {
  return axios
    .get(`${url}/fbid/${uuid}`)
    .then(res => {
      dispatch({
        type: GET_USER_ID_SUCCESS,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USER_ID_FAIL,
        payload: error,
      });
    });
};
