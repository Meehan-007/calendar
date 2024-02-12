import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeRow from './Componets/Time';

const Calendar = () => {

    const [hours, setHours] = useState([
        { hour: '9:00 AM', text: ''}, 
        { hour: '10:00 AM', text: ''},  
        { hour: '11:00 AM', text: ''},  
        { hour: '12:00 PM', text: ''},  
        { hour: '1:00 PM', text: ''}, 
        { hour: '2:00 PM', text: ''},  
        { hour: '3:00 PM', text: ''},  
        { hour: '4:00 PM', text: ''}, 
        { hour: '5:00 PM', text: ''} 
     ]);

    // need functions for local storage 

    // need use effects to automaticaly save it
    // color code , heavy grey for past 
    // white for present 
    // light grey for future  
    // local storage to hold the info in an object 


    // for loop to auto generate the fields?
    return(
        <section className='container'> 
          
          <TimeRow hours={hours} />

        </section>
    )







}

export default Calendar; 
