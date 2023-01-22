import React, { useState } from 'react';
 
 
export const Clock = () => {
    let time = new Date().toLocaleTimeString();
    
    const [count, setCount] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCount(time);
    };
    setInterval(UpdateTime,1000)
    return(
        <body>
           <h1 className='clock'> {count}</h1>
        </body>
        
    );
};    
