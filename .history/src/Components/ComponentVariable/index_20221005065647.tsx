import { ReactNode } from "react"

export interface ComponentVariableProps {
    title?: string
    children: ReactNode
}

const ComponentVariable = () => {
    return <div> <h2>Variações do ButtonPink</h2></div>
}

export default ComponentVariable