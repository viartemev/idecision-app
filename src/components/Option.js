import React from 'react';

const Option = (props) => (
    <div>
        <li>{props.option}</li>
        <button onClick={(e) => { props.handleDeleteOption(props.option) }}>
            remove
            </button>
    </div>
);

export default Option;