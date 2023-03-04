import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import {useNavigate} from 'react-router-dom'


export const signin = (formData,  history) => async (dispatch) => {
  // const history =useNavigate();
    try {

      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, data });
  
      history('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (formData, history) => async (dispatch) => {
    try {
      console.log('signup')
      const { data } = await api.signUp(formData);
      
      // console.log(data)
  
      dispatch({ type: AUTH, data });
  
      history('/');
    } catch (error) {
      console.log(error);
    }
  };