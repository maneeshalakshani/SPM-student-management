import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import createClass from './components/createClass';
import classHome from './components/classHome';
import editClass from './components/editClass';
import classTeacherEmailer from './components/classTeacherEmailer';
import classDetailsReport from './components/classDetailsReport';



// shamali
// student payment
import stdpay from './components/StudentPayment/StdpayAdd.js';
import stdpayH from './components/StudentPayment/StdPayDetails.js';
import stdReport from './components/StudentPayment/StdpayReport.js';
import stdUpdate from './components/StudentPayment/StdpayUpdate.js';
import maill from './components/StudentPayment/stpMail.js';
import success from './components/StudentPayment/StdpaySuccess.js';

//Teacher payment - shamali
import Teachersaladd from './components/TeacherSalay/TeacherSalAdd.js';
import TeacherDetails from './components/TeacherSalay/TeacherSalDetails.js';
import TeacherpayUpdate from './components/TeacherSalay/TeachSalUpdate.js';
import TeacherSalaryReport from './components/TeacherSalay/SalaryReport.js';


//shonali
import TimeTables from './components/Exam Time Table/TimeTables';
import CreateTimeTable from './components/Exam Time Table/CreateTimeTable';
import EditTimeTable from './components/Exam Time Table/EditTimeTable';





export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div classname ="container">

    {/* Supi */}
        <Route path = "/" exact component = {classHome}></Route>
        <Route path = "/add" exact component = {createClass}></Route>
        <Route path = "/edit/:id" exact component = {editClass}></Route>
        <Route path="/email" exact component={classTeacherEmailer}></Route>
        <Route path="/classReport" exact component={classDetailsReport}></Route>
        
   {/* shamali */}
        <Route path="/payadd" exact component={stdpay} />
        <Route path="/paydetails" exact component={stdpayH} />
        <Route path="/StdUpdate/:id" exact component={stdUpdate} />
        <Route path="/mail" exact component={maill} />
        <Route path="/success" component={success}></Route>
        <Route path="/Sreport" exact component={stdReport} />
        <Route path="/TeachpayAdd" component={Teachersaladd}></Route>
        <Route path="/TeacherSalDetails" exact component={TeacherDetails} />
        <Route path="/TeacherSalUpdate" exact component={TeacherpayUpdate} />
        <Route path="/SalaryReport" exact component={TeacherSalaryReport} />


{/* Shonali */}
        <Route path="/timetables" exact component={TimeTables}></Route>
        <Route path="/timetables/add" component={CreateTimeTable}></Route>
        <Route path="/timetables/update/:id" component={EditTimeTable}></Route>
        
    


   
 main
      </div>
      </BrowserRouter>
      
    )
  }
}
