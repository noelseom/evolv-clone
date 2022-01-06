import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import HeartModal from './heartModal'
import QuickViewModal from './quickViewModal'
import ReviewModal from './reviewModal'
import ShoppingCartModal from './shoppingCartModal'

import { ModalOverlay } from './style'

const Modal = ({ show, hideModal, gotoModal, modalType, productUid }) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
        const handleEsc = (e) => {
            //escape key
            if (e.keyCode === 27) hideModal()
        }

         window.addEventListener('keydown', handleEsc);
     
         return () => {
           window.removeEventListener('keydown', handleEsc);
         };
    }, [])

    const InnerModal = modalType === 0 ? <HeartModal /> : 
        modalType === 1 ? <QuickViewModal productUid={productUid} gotoModal={gotoModal}/> : 
        modalType === 2 ? <ReviewModal productUid={productUid} /> : <ShoppingCartModal />

    const modal = show ? <ModalOverlay onClick={hideModal}>{InnerModal}</ModalOverlay> : null

    if (isBrowser) {
        return ReactDOM.createPortal(modal, document.getElementById('modal-root'))
    } else {
        return null
    }
}

export default Modal
