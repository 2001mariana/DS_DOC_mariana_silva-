import { useState } from 'react'
import './HowToInstall.css'



const HowToInstall = () => {
    const [messageCopy, setMessageCopy] = useState<string>("Clique para copiar o comando de instalação")
    const [messageComandCopy, setmessageComandCopy] = useState<string>("npm i designsystem-marianasilva")

    function copyToClipboard() {
      setTimeout(() => {

        setmessageComandCopy("Copiado com sucesso!")
        setMessageCopy("")

      }, 500)
        
        if (navigator.clipboard && window.isSecureContext) {
          return navigator.clipboard.writeText('npm i designsystem-marianasilva')
        } else {
          const textArea = document.createElement('textarea')
          textArea.value = 'npm i designsystem-marianasilva'
          textArea.style.position = 'fixed'
          textArea.style.left = '-999999px'
          textArea.style.top = '-999999px'
          document.body.appendChild(textArea)
          textArea.focus()
          textArea.select()
          return new Promise<void>((res, rej) => {
            document.execCommand('copy') ? res() : rej()
            textArea.remove()
          })
        }
      }  

    const clearMessage = () => {
      setTimeout(() => {

        setMessageCopy("Clique para copiar o comando de instalação")
        setmessageComandCopy("npm i designsystem-marianasilva")

      }, 1200)
    }

    return (
        <div className='HowToInstall'>
        <div className="HowToInstall--copy" 
            onClick={copyToClipboard} 
            onMouseOut={clearMessage}
        >
          <span className="HowToInstall--span">{messageCopy}</span>
          {messageComandCopy}
        </div>
        </div>
        
    )
} 

export default HowToInstall