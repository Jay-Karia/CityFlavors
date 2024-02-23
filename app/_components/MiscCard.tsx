import React from 'react'
import Image from 'next/image'

interface MiscCardProps {
    image: string,
    content: React.ReactNode
}

const MiscCard = ( { image, content } : MiscCardProps ) => {
    return (
        <div className="flex lg:flex-row flex-col justify-between rounded-lg" style={{border: "1px solid black"}}>
            <div className="lg:w-2/5 flex justify-center items-center rounded-lg ">
                <Image src={image} alt="image" width={400} height={400} className="rounded-lg"/>
            </div>

            <div className="h-full lg:w-3/5 w-full flex justify-start p-5">
                {content}
            </div>
        </div>
    )
}

export default MiscCard