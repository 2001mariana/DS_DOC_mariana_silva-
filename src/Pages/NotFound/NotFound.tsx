import Lottie from 'lottie-react'

import NotFoundAnimation from '../../assets/animations/penguin-hello.json'
import ArrowAnimation from '../../assets/animations/pink-arrow.json'

import './NotFound.css'

const NotFound = () => {
    return (<>
    <div className="NotFound__animation--arrow">
        <Lottie animationData={ArrowAnimation} loop={true} />
    </div>
    <div className='NotFound'>
        <div className="NotFound__message">
            <h2 className="NotFound__message-title">Que bom ter você aqui!</h2>
            <p className="NotFound__message-body">Escolha um dos itens para continuar.</p>
        </div>
        
        <div className="NotFound__animation--penguin">
            <Lottie animationData={NotFoundAnimation} loop={true} />
        </div>

    </div></>
    )
}

export default NotFound