import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      page:1

    }
  };

  handleUser = u =>{
    this.setState({
      user:u
    })
  };

  handlePage = p =>{
    this.setState({
      page:p
    })
  };
  
render (){
  return (
    <div className="App">
      <Navbar/>
      <Main handleUser={this.handleUser} page={this.state.page} handlePage={this.handlePage} handleCountry={this.handleCountry}/>
      {this.state.user ? <Modal user={this.state.user} handleUser={this.handleUser}/> : ''}    
    </div>
  )
}
}

export default App;
