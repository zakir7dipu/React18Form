import React, {useEffect, useState} from 'react';

function Index({handler, value, id, required}) {
    const [isRequired, setRequired] = useState(false)

    useEffect(() => {
        if (required) setRequired(required)
    }, [required])

    return (
        <div className={`input-group style1`}>
            <input
                type="time"
                id={id}
                className="input-control"
                onChange={(e) => {
                    handler(e.target.value)
                }}
                value={value}
            />

        </div>
    );
}

export default Index;