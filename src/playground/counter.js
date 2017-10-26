const app = document.getElementById('app');

let count = 0;

const addOne = () => {
    count++;
    renderApp();
};

const minusOne = () => {
    count--;
    renderApp();
};

const reset = () => {
    count = 0;
    renderApp();
};

const renderApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={minusOne}>-1</button>
            <button onClick={addOne}>+1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, app);
};

renderApp();