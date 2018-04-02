import React from 'react'
import { connect } from 'react-redux'
import { sayHello } from '../actions'

let Button = ({ whatsUp, state, saySomething }) => (

  <div >
    <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
    <h2>{whatsUp}</h2>
    <button onClick={() => console.log(state)} >Press to inspect STATE in console panel</button>
  </div>

)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  state: state
})

const mapDispatchToProps = {
  saySomething: sayHello
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
