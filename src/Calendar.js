import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeRow from './Componets/Time'; 
const dayjs = require('dayjs');

const Calendar = () => {

    const [hours, setHours] = useState([
        { id: 9, hour: '9:00 AM', text: ''}, 
        { id: 10, hour: '10:00 AM', text: ''},  
        { id: 11, hour: '11:00 AM', text: ''},  
        { id: 12, hour: '12:00 PM', text: ''},  
        { id: 13, hour: '1:00 PM', text: ''}, 
        { id: 14, hour: '2:00 PM', text: ''},  
        { id: 15, hour: '3:00 PM', text: ''},  
        { id: 16, hour: '4:00 PM', text: ''}, 
        { id: 17, hour: '5:00 PM', text: ''} ,
        { id: 18, hour: '6:00 PM', text: ''}, 
        { id: 19, hour: '7:00 PM', text: ''}, 
        
       
        
        
     ]);

     const formattedDate = dayjs().format('MM-DD YYYY');
console.log(formattedDate); 


    // need functions for local storage 

    // need use effects to automaticaly save it
    // color code , heavy grey for past 
    // white for present 
    // light grey for future  
    // local storage to hold the info in an object 


    
    return(
        <main> 
        <section className='mt-5'> 
              <h1> Daily Calendar APP </h1> 
              <h3 className='mt-2'> {formattedDate} </h3>
        </section>
        <section className='container mt-4'> 
          
          <TimeRow hours={hours} />

        </section> 
        </main>
    )







}

export default Calendar; 
