import React from 'react';

function Index({children, submitHandler}) {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            submitHandler()
        }}>
            {children}
        </form>
    );
}

export default Index;