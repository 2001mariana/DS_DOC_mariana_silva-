import { ReactNode } from "react"

declare interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => (<div>{children}</div>)

export default Container