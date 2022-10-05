import { ReactNode } from "react"
import './index.css';

declare interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => (
    <div className="Container">
        
        <Header />
        {children}
    </div>)

export default Container