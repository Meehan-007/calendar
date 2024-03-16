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
           
     ]  );
    //  || JSON.parse(localStorage.getItem('hours'))

     useEffect(() => { 
        
        const storedHours = JSON.parse(localStorage.getItem('hours')); 
        if (storedHours) { 
            console.log('storedHours', storedHours);
            setHours(storedHours); 
        }} , []);

     const formattedDate = dayjs().format('MM-DD YYYY');
console.log(formattedDate); 


const handleHoursChange = (id, value) => {
    setHours(hours.map(hour =>
        hour.id === id ? { ...hour, text: value } : hour
    ));
}; 


useEffect(() => {   

    const hasNonEmptyText = hours.some(hour => hour.text.trim() !== '');
    if(hasNonEmptyText) {  
        localStorage.setItem('hours', JSON.stringify(hours)); 
    }
   
}, [hours]);


   

  


    
    return(
        <main> 
            
        <section className='mt-5'> 
              <h1> Daily Calendar APP </h1> 
              <h3 className='mt-2'> {formattedDate} </h3>
        </section>
        <section className='container mt-4'> 
          
          <TimeRow hours={hours} onChange={handleHoursChange} />

        </section> 
        </main>
    )







}

export default Calendar; 
