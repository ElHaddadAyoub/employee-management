import React, { Component } from 'react'
import EmployeesService from '../service/EmployeesService';


 class ListEmployeesComponents extends Component {
   constructor(props){
     super(props);

     this.state = {
       employees : []
     }
     this.addEmployee = this.addEmployee.bind(this);
     this.editEmployee = this.editEmployee.bind(this);
     this.deleteEmployee = this.deleteEmployee.bind(this);
   }
   componentDidMount(){
     EmployeesService.getEmployes().then((res)=>{
        this.setState({
          employees  : res.data
        });
     });
     
   }

   //redicrect usei history
    addEmployee () {
      this.props.history.push('/add-employee/_add')
   }

   //redirect ot the edit page
   editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`)
   }

   //delete Employee
   deleteEmployee(id) {
     console.log("deleted")
     EmployeesService.deleteEmployee(id).then(
      res => {
        this.setState({employees: this.state.employees.filter(employee => employee.id != id)});
    }
     );
     
   }

   //View Employee 
   viewEmployee(id) {
    console.log("Viewed")
    this.props.history.push(`/view-employee/${id}`)
   }
   
  render() {
    return (
      <div>
        
        <h2 className="text-center">All Employees</h2>
        <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
        
        <div className="container mt-5">
        <div className="row">
          <table className="table"> 
            <thead>
              <tr>
                
                <th>first name</th>
                <th>last name</th>
                <th>email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.employees.map(
                  employee =>
                  <tr key= {employee.id}> 
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td>
                        {/* <a href={"employee/"+employee.id} className="btn btn-info" >show </a> */}
                      <button type="button" onClick={() => this.editEmployee(employee.id)} className="btn btn-success" style={{marginRight: "10px"}} >Update</button>
                      <button type="button" onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger" style={{marginRight: "10px"}}>Delete</button>
                      <button type="button" onClick={() => this.viewEmployee(employee.id)} className="btn btn-info" >view</button>
                      </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
        </div>
        
      </div>
    )
  }
}


export default ListEmployeesComponents;