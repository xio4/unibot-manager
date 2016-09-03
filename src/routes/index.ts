import { CoreLayout } from '../components/layouts/CoreLayout';
import { HomePage } from '../components/pages/home/HomePage';
import { CounterRoute } from './counter/index';
import { DemoRoute } from './demo/index';

export default function createRoutes(store: any) {
    const counterRoute = CounterRoute(store);
    const demoRoute = DemoRoute(store);
    const indexRoute = { component: HomePage };

    return {
        path: '/',
        component: CoreLayout,
        indexRoute,
        childRoutes: [
            demoRoute,
            counterRoute
        ]
    };
}
