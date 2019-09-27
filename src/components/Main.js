import React, {Component} from 'react';
import User from './User';
import './main.css';


class Main extends Component {
  constructor (props){
    super(props);
    this.state = {
      users: []  
    };
  }

  componentDidMount(){

    const api = `https://randomuser.me/api/?page=${this.props.page}&results=50&seed=abc`;

    fetch(api)
      .then(res => res.json())
      .then(json => this.setState({
        users: json.results
      })
    )
  }

  componentWillReceiveProps(nextProps) {

    const api = `https://randomuser.me/api/?page=${nextProps.page}&results=50&seed=abc`;

    fetch(api)
      .then(res => res.json())
      .then(json => this.setState({
        users: json.results
      })
    )
  }

  page = () =>{
    this.props.handlePage (this.props.page +1)
  }
  
  render (){
    return (
      <div className="bg-main">
        <div className="button">
          <div className="text-button" onClick={this.page}>Look for more users --></div>
        </div>  
        {this.state.users.map(u=><User data={u} handleUser={this.props.handleUser}/>)}
      </div>
    )
  }
}

export default Main;