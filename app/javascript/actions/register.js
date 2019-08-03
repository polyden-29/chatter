import { REGISTER } from '../constants';

export const register = (username, password) => {
  return {
    type: REGISTER,
    payload: {
      username,
      password
    }
  }
}