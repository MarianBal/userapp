import React, {Component} from 'react';
import './modal.css';

class Modal extends Component {
  constructor (props){
    super(props);
    this.state = {

    }
  };
  componentDidMount() {
   
  }
  
  render (){
    return(
      <div className="modal">
        <div className="container-modal">
         <i className="fas fa-times" onClick={() => this.props.handleUser('')}></i>
          <img src={this.props.user.picture.large} alt="pic"/>
          <p className="name-modal">{this.props.user.name.title} {this.props.user.name.first} {this.props.user.name.last} </p>
          <hr/>
          <p className="info">{this.props.user.location.street}</p>
          <p className="info">{this.props.user.location.city}, {this.props.user.location.state}</p>
          <p className="info">{this.props.country}</p>
          <hr/>
          <p className="info">{this.props.user.phone}</p>
          <p className="email">{this.props.user.email} </p>
          <hr/>
        </div>
      </div>
      
      )
    }
}
    
    export default Modal;