 import * as types from '../types';

 export const setCount = () => ({
   type: types.SET_COUNT,
 });
 
 export const setNotifications = payload => ({
   type: types.SET_NOTIFICATION,
   payload,
 });