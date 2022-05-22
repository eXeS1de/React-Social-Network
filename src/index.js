import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let render = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store} />, document.getElementById('root'));
}

render(store.getState());

store.subscribe(() => {
    let state = store.getState();
    render(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();