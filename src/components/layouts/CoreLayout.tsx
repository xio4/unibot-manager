import * as React from 'react';
//import * as Header from '../header/UIHeader';

import './core-layout.styl';

interface CoreLayoutProps { children: any; }

export class CoreLayout extends React.Component<CoreLayoutProps, any> {
    render() {
        return <div className='core-layout'>
            <div className='core-layout__container'>
                {this.props.children}
            </div>
        </div>;
    }
}
