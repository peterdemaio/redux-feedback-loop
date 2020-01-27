import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

// Five reducers, one for each piece of data needed.
const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload
    } else if (action.type === 'RESET_FEELING') {
        return state = 0
    }
    return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload
    } else if (action.type === 'RESET_UNDERSTANDING') {
        return state = 0
    }
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload
    } else if (action.type === 'RESET_SUPPORT') {
        return state = 0
    }
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload
    } else if (action.type === 'RESET_COMMENTS') {
        return state = ''
    }
    return state;
}
const flagged = (state = false, action) => {
    if (action.type === 'FLAGGED') {
        return state = !state
    } else if (action.type === 'RESET FLAGGED') {
        return state = false
    }
    return state;
}
const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
        flagged

    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker(); 