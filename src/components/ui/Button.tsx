import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    fullWidth?: boolean;
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    fullWidth = false,
    href,
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variants = {
        primary: "bg-primary-red text-background-cream hover:bg-secondary-red shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        secondary: "border-2 border-background-cream text-background-cream hover:bg-background-cream hover:text-primary-dark",
        ghost: "text-support-blue hover:text-primary-red hover:bg-background-cream/10"
    };

    const finalClassName = twMerge(
        baseStyles,
        variants[variant],
        fullWidth && "w-full",
        className
    );

    if (href) {
        return (
            <a href={href} className={finalClassName}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={finalClassName}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
};
