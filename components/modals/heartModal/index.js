import React from 'react'
import { Container } from './style'

const HeartModal = () => {

    const modalStuff = (e) => {
        e.stopPropagation()
    }

    return (
        <Container onClick={modalStuff}>
            THIS IS THE WISHLIST MODAL
        </Container>
    )
}

export default HeartModal