import React from 'react'
import Image from 'next/image'

interface MiscLayoutProps {
    children: React.ReactNode
}

const MiscLayout = ({ children }: MiscLayoutProps) => {
    return (
        <div className="h-max bg-background font-sans antialiased flex flex-col pt-10">
            <div className='flex justify-center'>
                <Image src="/building.png" alt="logo" width={40} height={50} />
            </div>
            {children}
        </div>
    )
}

export default MiscLayout