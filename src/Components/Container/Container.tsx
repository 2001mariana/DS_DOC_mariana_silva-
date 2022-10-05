import { ReactNode } from "react"
import HowToInstall from "../HowToInstall";
import './Container.css';

declare interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => (
    <div className="Container">
        <HowToInstall />
        {children}
    </div>)

export default Container