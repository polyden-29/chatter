import React from "react"
import { connect } from 'react-redux';
import { REGISTER } from '../constants';

class Register extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }
  render () {
    const {
      username,
      password
    } = this.state

    return (
      <div>
        <p>this is register page</p>
        <p>userame</p>
        <input type="text"
                onChange={(e) => {this.setState({username: e.target.value})}}
                value={this.state.username}/>
        <p>password</p>
        <input type="text"
               onChange={(e) => {this.setState({password: e.target.value})}}
               value={this.state.password} />
        <br/>
        <button onClick={() => this.props.onRegister(username, password)}> Login </button>

        <p>username: {this.props.username}</p>
        <p>password: {this.props.password}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    username: state.RegisterReducer.username,
    password: state.RegisterReducer.password
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onRegister: (username, password) => dispach({payload: {username, password}, type: REGISTER})
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Register)
