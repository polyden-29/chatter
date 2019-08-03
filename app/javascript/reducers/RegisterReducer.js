import { REGISTER } from '../constants';

const initState = {
  username: '',
  password: ''
}

const RegisterReducer = (state=initState, action) => {
  console.log(action)
  switch (action.type) {
    case REGISTER:
      return {
        username: action.payload.username,
        password: action.payload.password
      }
    default:
      return state
  }
}

export default RegisterReducer