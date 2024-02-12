import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const TimeRow = ({ hours }) => {




    return (
        <section>
            {hours.map(hour => ( 
            <div key={hour.id}>  
           <div> 
            {hour.hour}
           </div>  

           <div> 
             <textarea defaultValue={hour.text}/> 
           </div> 
           </div>

            ))}
        </section>
    );
}

export default TimeRow;




