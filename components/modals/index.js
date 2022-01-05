import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import HeartModal from './heartModal'
import QuickViewModal from './quickViewModal'

import { ModalOverlay } from './style'

const Modal = ({ show, hideModal, modalType }) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
        const handleEsc = (event) => {
            //escape key
            if (event.keyCode === 27) hideModal()
        }

         window.addEventListener('keydown', handleEsc);
     
         return () => {
           window.removeEventListener('keydown', handleEsc);
         };
    }, [])

    const InnerModal = modalType === 0 ? <HeartModal /> : <QuickViewModal />

    const modal = show ? <ModalOverlay onClick={hideModal}>{InnerModal}</ModalOverlay> : null

    if (isBrowser) {
        return ReactDOM.createPortal(modal, document.getElementById('modal-root'))
    } else {
        return null
    }
}

export default Modal
