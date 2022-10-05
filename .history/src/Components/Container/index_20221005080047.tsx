import { ReactNode } from "react"
import Header from "../Header";
import './index.css';

declare interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => (
    <div className="Container">
        {children}
    </div>)

export default Container