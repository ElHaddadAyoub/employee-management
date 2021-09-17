//Had Compoent fih joj dyal les focntinannlite kydir update o Create

import React, { Component } from 'react'
import EmployeesService from '../service/EmployeesService';

 class CreateEmployeeComponents extends Component {
  constructor(props){
    super(props);

    this.state = {
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        email: '',
    }

    // this.changeFirstNameHandler = this.changeFirstNameHandle.bind(this)
    
    // this.changeLastNameHandler = this.changeLastNameHandler.bind(this)

    // this.changeEmailHandler = this.changeEmailHandler.bind(this)

    // this.saveEmployee = this.saveEmployee.bind(this)
    
  }
  componentDidMount () {
    if(this.state.id === '_add'){
      return 
    }else{
      EmployeesService.getEmployeeById(this.state.id).then((res)=>{
        let employee = res.data;
        this.setState({
          firstName : employee.firstName,
          lastName: employee.lastName ,
          email:employee.email  
         });
      });  
    }
    
 }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {firstName : this.state.firstName ,lastName : this.state.lastName , email: this.state.email }
    console.log(JSON.stringify(employee));
    if(this.state.id === '_add'){
      EmployeesService.createEmployee(employee).then(
        res => {
            this.props.history.push('/employees')
        }
      );
    }else{
      EmployeesService.updateEmployee(employee , this.state.id).then(res => {
        this.props.history.push('/employees')
    });
    }
    
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

getComponentStatus() {
  if(this.state.id === '_add') {
    return <h2 className="text-center mt-5">Add New Employee</h2>
  }else {
    return <h2 className="text-center mt-5">Update Employee</h2>
  }
}

  render() {
    return (
      <div>
        <div className="container">
          { this.getComponentStatus()  }
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
            <button  className="btn btn-success" onClick={this.saveOrUpdateEmployee} name="save" style={{ marginRight:"10px" }} >save</button>
            <button  className="btn btn-danger" onClick={this.cancelRequest.bind(this)} name="cancel"  >cancel</button>
          </div>
          
         
         
          
        </form>
        </div>
      </div>
    )
  }
}

export default CreateEmployeeComponents;
