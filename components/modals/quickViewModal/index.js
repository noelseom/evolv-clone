import React from 'react'
import { Container } from './style'

const QuickViewModal = () => {

    const modalStuff = (e) => {
        e.stopPropagation()
    }

    return (
        <Container onClick={modalStuff}>
            THIS IS THE QuickView MODAL
        </Container>
    )
}

export default QuickViewModal