import 'babel-polyfill';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import Reader from 'fantasy-readers';
import { compose } from 'ramda';
import readerMiddleware from './reader_middleware';
import appReducer from './reducers';
import { fetchUsers } from './actions';

// Initialize an "environment" once at the entrypoint of the application.
const env = {
    csrfToken: 'abcd1234',
    fetch: window.fetch
};

// Use middleware to keep the Reader configuration at the edge.
const store = applyMiddleware(
    readerMiddleware(Reader, env),
    promiseMiddleware
)(createStore)(appReducer);

document.getElementById('getUsers')
    .addEventListener('click', compose(store.dispatch, fetchUsers));
