import React from 'react';

export const DivContainer = (props) => {

return <>
    {React.cloneElement(props.children, { name: "Arun", place:  "chevoor"})}
</>
}

export default DivContainer;