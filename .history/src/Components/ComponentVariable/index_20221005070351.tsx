import { ReactNode } from "react"

export interface ComponentVariableProps {
    title?: string
    subtitle?: string
    children: ReactNode
}

const ComponentVariable = ({title, subtitle, children}: ComponentVariableProps) => {
    return (
    <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {children}
    </div>
    )
}

export default ComponentVariable