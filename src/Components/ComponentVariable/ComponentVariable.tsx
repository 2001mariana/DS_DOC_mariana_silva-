import { ReactNode } from "react"
import './index.css'

export interface ComponentVariableProps {
    title?: string
    subtitle?: string
    children: ReactNode
}

const ComponentVariable = ({title, subtitle, children}: ComponentVariableProps) => {
    return (
    <div className="ComponentVariable">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {children}
    </div>
    )
}

export default ComponentVariable