import React from 'react';

type Props = {
    className?: string;
    children?: React.ReactNode;
}

function NavItem({className, children}: Props) {
    return (
        <li className={className}>{children}</li>
    );
}

export default NavItem;