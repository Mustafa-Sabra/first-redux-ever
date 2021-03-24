import react , {Component} from 'react';
import {increase,decrease} from './actions/action';
import {connect} from "react-redux";

class App extends Component {
  
  render (){
    console.log(this.props)
   return (
    <div className="App">
     <button onClick={this.props.increase}> + </button>
     <div>{this.props.count}</div>
     <button onClick={this.props.decrease}> - </button>
    </div>
  )
};
};

function mapStateToProps(state) {
  return {
    count:state.count,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    increase:()=> dispatch(increase()),
    decrease:()=> dispatch(decrease()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);