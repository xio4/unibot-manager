import { CounterPage } from '../../components/pages/counter/CounterPage';

export function CounterRoute(store: any) {
    return {
        path: 'counter',
        getComponent(nextState: any, cb: any) {
            cb(null, CounterPage);
        }
    };
}
