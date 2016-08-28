import * as React from 'react';

import { UIHeader } from '../ui/header/UIHeader';
import { UIFooter } from '../ui/footer/UIFooter';

import './core-layout.styl';

interface CoreLayoutProps { children: any; }

export class CoreLayout extends React.Component<CoreLayoutProps, any> {
    render() {
        return <div className='core-layout'>
            <UIHeader></UIHeader>
            <div className='container core-layout__container'>
                {this.props.children}
            </div>
            <UIFooter></UIFooter>
        </div>;
    }
}
