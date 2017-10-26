import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleClearSelectedOption() {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter(option => option != optionToRemove) }));
    }

    handlePick() {
        const option = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => ({ selectedOption: option }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option alerady exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your live in computer hands';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption
                            handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption} />
                </div>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

