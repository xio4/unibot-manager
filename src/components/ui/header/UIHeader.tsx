import * as React from 'react';

import './ui-header.styl';

interface UIHeaderProps { children?: any; }

export class UIHeader extends React.Component<UIHeaderProps, any> {
    render() {
        return <div className='ui-header'>
            <div className='container ui-header__container'>
                {this.props.children}
            </div>
        </div>;
    }
}
