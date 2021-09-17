import axios from 'axios';

const EMPLOYEE_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService { 


    getEmployes (){
      return axios.get(EMPLOYEE_API_URL)
    }

    createEmployee (employee) {
      return axios.post(EMPLOYEE_API_URL , employee);
    }

    getEmployeeById(employeeId) {
      return axios.get(EMPLOYEE_API_URL + '/'+ employeeId)
    }

    //update Command
    updateEmployee (employee , employeeId) {
        return axios.put(EMPLOYEE_API_URL + '/'+ employeeId , employee);
    }

    //delete Compoents 

    deleteEmployee(idEmployee) {
      return axios.delete(EMPLOYEE_API_URL + '/'+ idEmployee );
    }
} 


export default new EmployeeService();