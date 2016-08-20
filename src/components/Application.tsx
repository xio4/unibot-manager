import * as React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

interface ApplicationProps { history: any; routes: any; store: any}

export class Application extends React.Component<ApplicationProps, any> {
    render() {
        return <Provider store={this.props.store}>
            <Router history={this.props.history} children={this.props.routes} />
        </Provider>;
    }

}
