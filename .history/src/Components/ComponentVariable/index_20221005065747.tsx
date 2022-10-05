import { ReactNode } from "react"

export interface ComponentVariableProps {
    title?: string
    children: ReactNode
}

const ComponentVariable = ({title, children}: ComponentVariableProps) => {
    return (
    <div>
        <h2>{title}</h2>
        {}
    </div>
    )
}

export default ComponentVariable