import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post('https://dummyjson.com/api/auth/login', credentials);
      const { token } = response.data;
      dispatch(loginSuccess(token));
      localStorage.setItem('token', token);
    } catch (error) {
      dispatch(loginFailure(error.message || 'Login failed. Please check your credentials.'));
    }
  };
};
