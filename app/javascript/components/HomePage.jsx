import React from "react"
import { connect } from 'react-redux';
import HomePageReducer from '../reducers/HomePageReducer';
import { AGE_UP, AGE_DOWN } from '../constants';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <p>this is home page</p>
        <div>age: {this.props.age}</div>
        <button onClick={this.props.onAgeUp}> up</button>
        <button onClick={this.props.onAgeDown}> down</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    age: state.HomePageReducer.age
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({type: AGE_UP}),
    onAgeDown: () => dispach({type: AGE_DOWN}),
  }
}

export default connect(mapStateToProps, mapDispachToProps)(HomePage)