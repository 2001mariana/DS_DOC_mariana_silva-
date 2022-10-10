import { ReactNode } from "react"
import './Container.css';

declare interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => (
    <div className="Container">
        {children}
    </div>)

export default Container