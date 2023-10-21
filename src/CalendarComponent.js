import { useState } from 'react';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

function MyCalendar() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <CalendarComponent /> 
    </div>
  );
}

export default MyCalendar;
