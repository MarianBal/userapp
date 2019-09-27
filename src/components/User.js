import React, {Component} from 'react';
import './user.css';

class User extends Component {
  constructor (props){
    super(props);
    this.state = {

    };
  }

    componentDidMount(){
      const nat = this.props.data.nat;
    
      const countriesApi = `http://restcountries.eu/rest/v2/alpha?codes=${nat}`;
    
      fetch(countriesApi)
        .then(res => res.json())
        .then(json =>
          this.setState({
            country: json[0].name
        })
      ) 
    }

    componentWillReceiveProps(nextProps){
      const nat = nextProps.data.nat;
    
      const countriesApi = `http://restcountries.eu/rest/v2/alpha?codes=${nat}`;
    
      fetch(countriesApi)
        .then(res => res.json())
        .then(json =>
          this.setState({
            country: json[0].name
        })
      ) 
    }
  
    render (){
    return (
    this.state.country ?
        <div className="user" onClick={() => this.props.handleUser(this.props.data)} >
            <img src={this.props.data.picture.medium} alt="pic"/>
          <p className="name">{`${this.props.data.name.first} ${this.props.data.name.last}`}</p>
          <p className="city">{this.props.data.location.city}</p>
          <p className="country">{this.state.country}</p>
        </div>
    :''
    )
  }
}
  
  export default User;