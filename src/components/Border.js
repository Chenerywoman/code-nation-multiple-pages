import React from 'react';

const Border = (Component) => {
    return (props) => {
       return (<div className="border">
            <Component {...props}/>
        </div>
       )
    }
}

export default Border;