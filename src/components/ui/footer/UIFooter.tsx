import * as React from 'react';

import { copyrightText } from '../../../utils/copyright';

import './ui-footer.styl';

interface UIFooterProps { children?: any; }

export class UIFooter extends React.Component<UIFooterProps, any> {
    render() {
        return <div className='ui-footer'>
            <div className='container ui-footer__container'>

                {this.props.children}

                <div className='ui-footer__copyright'>
                    {copyrightText}
                </div>
            </div>
        </div>;
    }
}
