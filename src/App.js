
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import ListEmployeesComponents from  './components/ListEmployeesComponents'
import HeaderComponents from './components/HeaderComponents'
import FooterComponents from './components/FooterComponents';
import CreateEmployeeComponents from './components/CreateEmployeeComponents';
import EmployeeDetailsComponents from './components/EmployeeDetailsComponents';
// import UpdateEmployeeComponents from './components/UpdateEmployeeComponents';
function App() {
  return (
    <div className="App">
      <Router>
        
          <HeaderComponents />
            <div className="container"> 
              <Switch>
                <Route path="/" component = {ListEmployeesComponents} exact></Route>
                <Route path="/employees" component = {ListEmployeesComponents} exact></Route>
                <Route path="/add-employee/:id" component = {CreateEmployeeComponents} exact></Route>
                {/* <Route path="/update-employee/:id" component = {UpdateEmployeeComponents} exact></Route> */}
                <Route path="/view-employee/:id" component = {EmployeeDetailsComponents} exact></Route>
              </Switch>
            </div> 
          <FooterComponents />
        
      </Router>
    </div>
  );
}

export default App;
