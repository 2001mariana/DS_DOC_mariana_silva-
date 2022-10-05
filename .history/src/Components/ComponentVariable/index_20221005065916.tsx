import { ReactNode } from "react"

export interface ComponentVariableProps {
    title?: string
    children: ReactNode
}

const ComponentVariable = ({title, children}: ComponentVariableProps) => {
    return (
    <div>
        <h2>{title}</h2>
        <p>{`<ButtonDanger label="custom text"  size="small" | "medium" | "large" variant="outlined" | "solid" />`}</p>
        {children}
    </div>
    )
}

export default ComponentVariable