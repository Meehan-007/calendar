import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const dayjs = require('dayjs');


const TimeRow = ({ hours }) => {

    const currentHour = dayjs().format('HH') 
    

    return (
        <section>
            {hours.map(hour => (  
                
            <div key={hour.id} className='col-12 row mx-auto d-flex align-items-center'>  
           <div className='col-2'> 
            {hour.hour}
           </div>  

           <div className='col-10 form-group ' > 
             <textarea className='form-control border border-3' style={{ 
                backgroundColor: hour.id < currentHour ? 'grey' : hour.id == currentHour ? 'white' : 'lightgrey',
               color: hour.id < currentHour ? 'white' : 'black'
           }} defaultValue={hour.text}/> 
           </div> 
           </div>

            ))}
        </section>
    );
}

export default TimeRow;




