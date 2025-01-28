import type * as React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
}

export const Button = (props: ButtonProps): React.ReactElement => {
    const { children, className, onClick } = props;

    return (
        <button type="button" className={className} onClick={onClick}>
            {children}
        </button>
    );
};
