import React from 'react';

function FromRow({children, classname}) {
    return (
        <div className={`from-row ${classname}`}>
            {children}
        </div>
    );
}

export default FromRow;