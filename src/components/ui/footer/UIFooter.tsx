import * as React from 'react';

import './ui-footer.styl';

interface UIFooterProps { children?: any; }

export class UIFooter extends React.Component<UIFooterProps, any> {
    render() {
        return <div className='ui-footer'>
            <div className='ui-footer__container'>
                {this.props.children}
            </div>
        </div>;
    }
}
