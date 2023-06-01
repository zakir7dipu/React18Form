import React, {useEffect, useState, createRef} from "react";

const Index = ({label, type, id, required, handler, value, col}) => {
    const [isRequired, setRequired] = useState(false)
    const inputField = createRef();

    const focusFunction = (e) => {
        inputField.current.classList.add("styled-input")
        inputField.current.closest(".input-group").querySelector('label').classList.add("styled-input-label")
    }

    const focusOutFunction = () => {
        if (inputField.current.value === "") {
            inputField.current.classList.remove("styled-input")
            inputField.current.closest(".input-group").querySelector('label').classList.remove("styled-input-label")
        }
    }

    useEffect(() => {
        if (inputField.current.value !== "") {
            inputField.current.classList.add("styled-input")
            inputField.current.closest(".input-group").querySelector('label').classList.add("styled-input-label")
        }
    }, [value])

    useEffect(() => {
        if (required) setRequired(required)
    }, [required])

    return (
        <div className={`input-group style1 col-md-${col}`}>
            <input
                type={type}
                id={id}
                className="input-control"
                required={isRequired}
                onChange={(e) => {
                    handler(e.target.value)
                }}
                value={value}
                ref={inputField}
                onFocus={focusFunction}
                onBlur={focusOutFunction}
            />
            <label htmlFor={id}>{label} {isRequired && <sup className="required">*</sup>}</label>
        </div>
    );
};

export default Index;
