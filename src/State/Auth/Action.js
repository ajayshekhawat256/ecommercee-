import axios from 'axios';
import { API_BASE_URL } from '../../config/apiConfig';
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from './ActionType';
const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerfailed = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => {
    return async (dispatch) => {
        dispatch({ type: REGISTER_REQUEST });
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
            const user = response.data;
            if (user.jwt) {
                localStorage.setItem("jwt", user.jwt);
            }
            dispatch({ type: REGISTER_SUCCESS, payload: user.jwt });
        } catch (error) {
            dispatch({ type: REGISTER_FAILURE, payload: error.message });
        }
    };
};
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginsuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginfailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
export const login = (userData) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/signIn`, userData);
            const user = response.data;
            if (user.jwt) {
                localStorage.setItem("jwt", user.jwt);
            }
            console.log(user.jwt);
            dispatch({ type: LOGIN_SUCCESS, payload: user.jwt });
        } catch (error) {
            dispatch({ type: LOGIN_FAILURE, payload: error.message });
        }
    };
};

export const getUserRequest = () => ({ type: GET_USER_REQUEST });
export const getUserSuccess = (user) => ({ type: GET_USER_FAILURE, payload: user });
export const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUserProfile = () => {
    return async (dispatch) => {
        dispatch({ type: GET_USER_REQUEST });
        const token = localStorage.getItem("jwt");
        try {
            const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const user = response.data;
            console.log(user+"this is userProfile");
            dispatch({ type: GET_USER_SUCCESS, payload: user });
        } catch (error) {
            dispatch({ type: GET_USER_FAILURE, payload: error.message });
        }
    };
};
export const logout = () =>  async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
}