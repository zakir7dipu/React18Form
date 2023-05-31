import React, {useEffect, useState} from "react";

const Index = ({label, type, id, required, handler, value, col}) => {
    const [isRequired, setRequired] = useState(false)

    useEffect(()=>{
        if(required) setRequired(required)
    },[required])

  return (
      <div className={`input-group style1 col-md-${col}`}>
          <input
              type={type}
              id={id}
              className="input-control"
              required={isRequired}
              onChange={(e)=>{
                  handler(e.target.value)
              }}
              value={value}
          />
          <label htmlFor={id}>{label} {isRequired && <sup className="required">*</sup>}</label>
      </div>
  );
};

export default Index;
