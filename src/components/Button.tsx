import React from 'react';
import Link from "next/link";

type Props = {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'light' | 'slate';
    onClick?: (event: React.MouseEvent) => void;
    display?: "button" | "a";
    url?: string
}

function Button({ children, onClick, url = "", display = "button", className = "", variant = "primary" }: Props) {

    let buttonClasses = "";
    switch (variant) {
        case 'primary':
            buttonClasses = "bg-primary text-white hover:bg-secondary";
        break;
        case 'secondary':
            buttonClasses = "bg-secondary text-white hover:bg-primary";
        break;
        case 'light':
            buttonClasses = "bg-light text-primary";
        break;
        case 'slate':
            buttonClasses = "bg-slateGray hover:bg-slate text-secondary border border-slateGrey";
        break;
    }

    if (display === "a") {
        return <Link className={"py-2 px-4 rounded " + buttonClasses + " " + className} href={url}>{children}</Link>
    }

    return (
        <button onClick={onClick} className={"py-2 px-4 rounded " + buttonClasses + " " + className}>{children}</button>
    );
}

export default Button;