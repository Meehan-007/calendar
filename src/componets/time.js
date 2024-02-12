import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const TimeRow = ({ hours }) => {




    return (
        <section>
            {hours.map(hour => ( 
            <div>  
           <div key={hour.id}> 
            {hour.hour}
           </div>  

           <div key={hour.id + '_textarea'}> 
             <textarea>  {hour.text} </textarea>
           </div> 
           </div>

            ))}
        </section>
    );
}

export default TimeRow;




