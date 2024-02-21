import React from 'react'

type Props = {
    children: React.ReactNode,
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'muted'
}

const Typography = ({ children, variant }: Props) => {
    return (
        <div>
            {variant === 'h1' && <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {children}
            </h1>}
            {variant === 'h2' && <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                {children}
            </h2>}
            {variant === 'h3' && <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {children}
            </h3>}
            {variant === 'h4' && <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                {children}
            </h4>}
            {variant === 'p' && <p className="leading-7 [&:not(:first-child)]:mt-6">
                {children}
            </p>}
            {variant === 'small' && <small className="text-sm font-medium leading-none">{children}</small>}
            {variant === 'muted' && <p className="text-sm text-muted-foreground">{children}</p>}
        </div>
    )
}

export default Typography