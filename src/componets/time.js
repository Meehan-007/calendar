import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const dayjs = require('dayjs');


const TimeRow = ({ hours }) => {

    const currentHour = dayjs().format('HH') 
    

    return (
        <section>
            {hours.map(hour => (  
                
            <div key={hour.id} className='col-12 row mx-auto'>  
           <div className='col-4'> 
            {hour.hour}
           </div>  

           <div className='col-7 form-group ' > 
             <textarea className='form-control border border-3' style={{ 
                backgroundColor: hour.id < currentHour ? 'grey' : hour.id == currentHour ? 'white' : 'lightgrey'
              
           }} defaultValue={hour.text}/> 
           </div> 
           </div>

            ))}
        </section>
    );
}

export default TimeRow;




