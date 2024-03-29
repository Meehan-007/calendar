import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const dayjs = require('dayjs');

const TimeRow = ({ hours, onChange }) => {
    const currentHour = dayjs().format('HH');

    const handleChange = (id, value) => {
        console.log('handleChange', id, value);
        onChange(id, value);
    };

    return (
        <section>
            {hours.map(hour => (

                <div key={hour.id} className='col-12 row mx-auto d-flex align-items-center'>
                    <div className='col-2'>
                        {hour.hour}
                    </div>

                    <div className='col-10 form-group ' >
                        <textarea className='form-control border border-3' style={{
                            backgroundColor: hour.id < currentHour ? 'lightgrey' : 'white',

                        }} defaultValue={hour.text} onChange={(e) => handleChange(hour.id, e.target.value)} />
                    </div>
                </div>
            ))}
        </section>
    );
}

export default TimeRow;




