import React from 'react'

interface Props {
    children: React.ReactNode;
}

const ContactLayout = ({ children }: Props) => {
    return (
        <div className="pt-5 h-full">
            {children}
        </div>
    )
}

export default ContactLayout