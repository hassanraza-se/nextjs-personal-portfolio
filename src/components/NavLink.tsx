import React from 'react';
import Link from "next/link";

type Props = {
    url: string;
    children?: React.ReactNode;
    className?: string;
}

function NavLink({url, children, className = ""}: Props) {
    return (
            <Link href={url} scroll={true}
               className={"block py-2 px-3 text-darkGrey hover:cursor-pointer md:hover:bg-transparent md:hover:text-primary md:p-0 " + className}
               >{children}
            </Link>
    );
}

export default NavLink;