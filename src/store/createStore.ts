import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { makeRootReducer } from '../reducers/index';

const stateFunc = (initialState = {}, history: any): any => {
    const middleware = [thunk, routerMiddleware(history)];
    const enchancers: any[] = [];
    const store: any = createStore(
        makeRootReducer(null),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enchancers
        )
    );

    store.asyncReducers = {};

    return store;
};

export default stateFunc;
