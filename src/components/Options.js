import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please, add option</p>}
            <ol>
                {props.options.map((option) => (
                    <Option
                        key={option}
                        option={option}
                        handleDeleteOption={props.handleDeleteOption} />
                ))}
            </ol>
        </div>
    );
};

export default Options;