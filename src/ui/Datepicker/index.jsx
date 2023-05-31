import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Index({startDate, handler, col}) {
    return (
        <div className={`input-group style1 col-md-${col}`}>
            <DatePicker selected={startDate} onChange={(date) => handler(date)}/>
        </div>
    );
}

export default Index;