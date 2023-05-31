import React from 'react';

function Index({id, required, handler, value}) {
    return (
        <>
            <span className="overline">No</span> &nbsp;
            <input
                type="checkbox"
                id={id}
                checked={value}
                required={required}
                onChange={(e) => {
                    handler(e.target.value)
                }}
            /> &nbsp;
            <span className="overline">Yes</span>
        </>
    );
}

export default Index;