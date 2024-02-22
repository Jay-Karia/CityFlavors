import React from 'react'

interface Props {
    children: React.ReactNode;
}

const ItemsLayout = ({ children }: Props) => {
    return (
        <div className="h-screen flex flex-col">
            {children}
        </div>
    )
}

export default ItemsLayout