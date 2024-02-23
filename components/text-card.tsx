import React from 'react'

interface TextCardProps {
  header: string
  subtitle: string
  icon: React.ReactNode
}

const TextCard = ({header, subtitle, icon} : TextCardProps) => {
  return (
      <div className="m-2 flex flex-col lg:items-start items-center">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight flex items-center gap-2 lg:text-start text-center">
          {header}
          {icon}
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-2 lg:text-start text-center">
          {subtitle}
        </p>
      </div>
  )
}

export default TextCard