import React from 'react'
import Image from 'next/image'

interface MiscCardProps {
    image: string,
    content: React.ReactNode
}

const MiscCard = ( { image, content } : MiscCardProps ) => {
    return (
        <div className="flex md:flex-row flex-col justify-between h-max rounded-lg" style={{border: "1px solid black"}}>
            <div className="md:w-2/5 md:flex hidden justify-center items-center border-r-2 border-black rounded-lg">
                <Image src={image} alt="image" width={400} height={400} />
            </div>

            <div className="h-full md:w-3/5 w-full flex justify-start p-5">
                {content}
            </div>
        </div>
    )
}

export default MiscCard