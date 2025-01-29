import clsx from 'clsx';
import type * as React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
}

export const Button = (props: ButtonProps): React.ReactElement => {
    const { children, className, onClick } = props;

    return (
        <button
            type="button"
            className={clsx(
                'border-amber-700 border-2 rounded-lg px-4 py-2 bg-transparent transition-colors',
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
