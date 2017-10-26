class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.state = {
            visible: true
        }
    }

    changeVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render() {
        return (
            <div>
                <p>Visibility Toggle</p>
                <button onClick={this.changeVisibility}>
                    {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Some important informantion here</p>
                    </div>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));