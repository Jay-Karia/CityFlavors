import React from 'react'

interface Props {
    children: React.ReactNode;
}

const ItemsLayout = ({ children }: Props) => {
    return (
        <div className="h-max flex flex-col">
            {children}
        </div>
    )
}

export default ItemsLayout