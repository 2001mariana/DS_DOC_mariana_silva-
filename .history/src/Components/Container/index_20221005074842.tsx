import { ReactNode } from "react"
import './App.css';
declare interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => (<div className="Container">{children}</div>)

export default Container