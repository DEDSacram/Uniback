
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Button from 'react-bootstrap/Button';

  
export default function CalendarD() {
    const [value, onChange] = useState(new Date());
    const Onclick = () => {
      console.log(value)
      };
  
    return (
        <div>
            <h1>Vyberte Datum</h1>
            <Calendar
                onChange={onChange}
                value={value}
            />
            <Button onClick={Onclick}>Potvrdit</Button>
            
        </div>
    );
}
 



