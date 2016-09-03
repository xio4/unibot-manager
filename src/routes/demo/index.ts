import { DemoPage } from '../../components/pages/demo/DemoPage.tsx';

export function DemoRoute(store: any) {
    return {
        path: 'demo',
        getComponent(nextState: any, cb: any) {
            cb(null, DemoPage);
        }
    };
}
