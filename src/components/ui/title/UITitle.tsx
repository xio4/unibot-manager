import * as React from 'react';
import * as classNames from 'classnames';

export type TitleSize =
    'lg'
    | 'md'
    | 'sm'
    | 'xs';


interface ITagBySize {
    lg: string;
    md: string;
    sm: string;
    xs: string;
    [key: string]: string;
}

const tagBySize: ITagBySize = {
    lg: 'h1',
    md: 'h2',
    sm: 'h3',
    xs: 'h4'
};

interface UITitleProps {
    size?: TitleSize;
    children?: any;
    subtitle?: boolean;
}

export const UITitle = (props: UITitleProps) => {
    const
        WrapTag: any = tagBySize[props.size as string],
        Tag: any = props.subtitle ? 'small' : 'span';

    return <WrapTag>
        <Tag>
            {props.children}
        </Tag>
    </WrapTag>;
}

(UITitle as any).defaultProps = {
    size: 'md',
    subtitle: false
}
