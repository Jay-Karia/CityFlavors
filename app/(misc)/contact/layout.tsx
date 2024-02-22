import React from 'react'

interface Props {
    children: React.ReactNode;
}

const ContactLayout = ({ children }: Props) => {
    return (
        <div className="h-screen bg-background font-sans antialiased flex flex-col">
            {children}
        </div>
    )
}

export default ContactLayout