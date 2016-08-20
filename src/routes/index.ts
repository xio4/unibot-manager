import { CoreLayout } from '../components/layouts/CoreLayout';
import { HomePage } from '../components/pages/home/HomePage';
import { CounterRoute } from './counter/index';

export default function createRoutes(store: any) {
    const counterRoute = CounterRoute(store);
    const indexRoute = { component: HomePage };

    return {
        path: '/',
        component: CoreLayout,
        indexRoute,
        childRoutes: [
            counterRoute
        ]
    };
}
