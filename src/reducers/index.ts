import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

export function makeRootReducer(asyncReducers: any): any {
    return combineReducers(Object.assign(
        { router },
        asyncReducers
    ));

}

export function injectReducer(store: any, options: any) {
    store.asyncReducers[options.key] = options.reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
}
