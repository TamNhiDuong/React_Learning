
import './App.css';
import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
state = {
  username: 'supermax'
}

//Manipulate state, when type to the input box, change
usernameChangedHandle = (event) => {
  this.setState({username: event.target.value})

}


  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangedHandle}
        currentName={this.state.username}
        />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName="Thi"/>
        <UserOutput userName="Nhi"/>
      </div>
    );
  }
  }
  

export default App;
