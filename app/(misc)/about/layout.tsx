import React from 'react'

interface Props {
    children: React.ReactNode;
}

const AboutLayout = ({ children }: Props) => {
  return (
    <div className="">
            {children}
        </div>
  )
}

export default AboutLayout