import React, { Component } from 'react'
import EmployeesService from '../service/EmployeesService';
class UpdateEmployeeComponents extends Component {

  constructor(props){
    super(props);

    this.state = {
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        email: '',
    }

   
  }
  componentDidMount () {
     EmployeesService.getEmployeeById(this.state.id).then((res)=>{
       let employee = res.data;
       this.setState({
         firstName : employee.firstName,
         lastName: employee.lastName ,
         email:employee.email  
        });
     });
  }
  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {firstName : this.state.firstName ,lastName : this.state.lastName , email: this.state.email }
    console.log('employee => ' + JSON.stringify(employee));
    EmployeesService.updateEmployee(employee , this.state.id).then(res => {
        this.props.history.push('/employees')
    });
   

  }

  changeFirstNameHandler = (event) =>{
      this.setState(
        {firstName : event.target.value}
      );
  }

  changeLastNameHandler = (event) =>{
    this.setState(
      {lastName : event.target.value}
    );
}


changeEmailHandler = (event) =>{
  this.setState(
    {email : event.target.value}
  );
}

cancelRequest = () => {
    this.props.history.push('/employees')
}

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-center mt-5">Add New Employee</h2>
        <form>
          <div className="form-group m-3">
            <label >First Name</label>
            <input type="text" className="form-control" id="first_name" aria-describedby="first_name" placeholder="Enter your first name" value={this.state.firstName} onChange={this.changeFirstNameHandler} name="first_name" />
            
          </div>
          <div className="form-group m-3">
            <label >Last Name</label>
            <input type="text" className="form-control" id="last_name" aria-describedby="last_name" placeholder="Enter your last name" value={this.state.lastName}  onChange={this.changeLastNameHandler}  name="last_name" />
          </div>
          <div className="form-group m-3">
            <label >Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Enter your email" value={this.state.email}  onChange={this.changeEmailHandler} name="email" />
          </div>

         <div className="form-group m-3">
            <button  className="btn btn-success" onClick={this.updateEmployee} name="save" >save</button>
            <button  className="btn btn-danger" onClick={this.cancelRequest.bind(this)} name="cancel"  >cancel</button>
          </div>
          
         
         
          
        </form>
        </div>
      </div>
    )
  }
}


export default UpdateEmployeeComponents;