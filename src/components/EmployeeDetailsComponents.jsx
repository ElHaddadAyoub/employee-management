import React, { Component } from 'react'
import EmployeesService from '../service/EmployeesService';

 class EmployeeDetailsComponents extends Component {
   constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee : {}
        
    }
   }
   
   componentDidMount() {
      EmployeesService.getEmployeeById(this.state.id).then(res =>{
          this.setState({employee: res.data})
      });
   }

 

   backAction = () => {
    this.props.history.push('/employees')
}

  render() {
    return (
      <div>
        <div clasName="row">
          <button onClick={this.backAction}>Back</button>
        </div>
        <h2>Details of {this.state.id }</h2>
        <label>First Name</label>
        <h3>{ this.state.employee.firstName }</h3>


        <label>Last Name</label>
        <h3>{ this.state.employee.lastName }</h3>



        <label>Email</label>
        <h3>{ this.state.employee.email }</h3>
      </div>
    )
  }
}


export default EmployeeDetailsComponents;