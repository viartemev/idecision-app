import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selection Option"
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Selection Options</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okey</button>
    </Modal>
);

export default OptionModal;