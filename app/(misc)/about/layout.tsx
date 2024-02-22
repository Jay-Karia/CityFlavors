import React from 'react'

interface Props {
    children: React.ReactNode;
}

const AboutLayout = ({ children }: Props) => {
  return (
    <div className="h-full flex flex-col">
            {children}
        </div>
  )
}

export default AboutLayout