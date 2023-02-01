import Lottie from 'lottie-react'

import WelcomeAnimation from '../../assets/animations/welcome.json'

import './NotFound.css'

const NotFound = () => {
    return (
    <div className='NotFound__container'>
      <div className="NotFound__animation--welcome">
        <Lottie animationData={WelcomeAnimation} loop={true} />
      </div>
    </div>
    )
}

export default NotFound