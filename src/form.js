import React from 'react';
import Heading from './Heading';
import Details from './Details';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            fullname:"",
            email:"",
            phone:"",
            location:"",
            isSubmit: false
        }
    }
    fnchangeEvent = (e) => {this.setState({fullname: e.target.value,isSubmit: false})}
    mailchangeEvent = (e) => {this.setState({email: e.target.value,isSubmit: false})}
    pnchangeEvent = (e) => {this.setState({phone: e.target.value,isSubmit: false})}
    lnchangeEvent = (e) => {this.setState({location: e.target.value,isSubmit: false})}
    btnclickEvent = (e) => {this.setState({isSubmit: true})}

    render(){
        return(
        <>
          <Heading heading="FullName:"/>
          <input type="text" name="fullname" placeholder="Enter name" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$" onChange={this.fnchangeEvent}/> 
          <Heading heading="Email:"/>
          <input type="text" name="email" placeholder="Enter email" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" onChange={this.mailchangeEvent}/> 
          <Heading heading="Mobile No:"/>
          <input type="text" name="phone" placeholder="Enter mobile no" pattern="^[1-9][0-9]{9}$" onChange={this.pnchangeEvent}/> 
          <Heading heading="Location:"/>
          <input type="text" name="location" placeholder="Enter location" pattern="^[a-zA-Z]+(\s[a-zA-Z]+)*$" onChange={this.lnchangeEvent}/> 
          <button onClick={(e) => this.btnclickEvent(e)} style={{marginBottom:"20px"}}>Submit</button>  
          {this.state.isSubmit ? <Details fname={this.state.fullname} mail={this.state.email} phone={this.state.phone} location={this.state.location} />:<Details />}
        </>
        )
    }
}
 
    
export default Form;
