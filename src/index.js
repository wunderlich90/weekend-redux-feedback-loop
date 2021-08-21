import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers
const feelingReducer = (state = '', action) => {
    // feedback added to DB
    switch (action.type) {
        case 'SET_FEELING_DATA':
            return action.payload
        default:
    }

    return state;
};

const understandingReducer = (state = '', action) => {
    // feedback added to DB
    switch (action.type) {
        case 'SET_UNDERSTANDING_DATA':
            return action.payload
        default:
    }

    return state;
};

const supportReducer = (state = '', action) => {
    // feedback added to DB
    switch (action.type) {
        case 'SET_SUPPORT_DATA':
            return action.payload
        default:
    }

    return state;
};

const commentsReducer = (state = '', action) => {
    // feedback added to DB
    switch (action.type) {
        case 'SET_COMMENTS_DATA':
            return action.payload
        default:
    }

    return state;
};


// Store
const storeInstance = createStore(
    combineReducers({
        // Add reducers
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer

    }),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
