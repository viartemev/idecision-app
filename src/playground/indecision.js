const app = document.getElementById('app');

const application = {
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        application.options.push(option);
        e.target.elements.option.value = '';
    }
    renderCounter();
};

const removeAll = () => {
    application.options = [];
    renderCounter();
};

const whatIShouldDo = () => {
    alert('You should do: ' + application.options[Math.floor(Math.random() * application.options.length)]);
};

const renderCounter = () => {
    const template = (
        <div>
            <h1>Options manager</h1>
            <p>{application.options.length > 0 ? 'There is options here:' : 'There is no options here'}</p>
            <p><ol>
                {application.options.map((option) => <li key={option}>{option}</li>)}
            </ol></p>
            <button disabled={application.options.length === 0} onClick={whatIShouldDo}>What I should do?</button>
            <button onClick={removeAll}>Remove all</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, app);
};

renderCounter();