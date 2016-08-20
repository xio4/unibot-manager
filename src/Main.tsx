import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createHistory } from 'history';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStore from './store/createStore'
import createRoutes from './routes/index';

import { Application } from './components/Application';

const browserHistory = useRouterHistory(createHistory)({
});

const initialState = (window as any).___INITIAL_STATE__;
const store = createStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: state => state.router
});

const routes = createRoutes(store);

ReactDOM.render(
    <Application
        store={store}
        history={history}
        routes={routes}
    />,
    document.getElementById('app')
);
