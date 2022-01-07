import React from 'react'
import { Container } from './style'

const HeartModal = () => {

    const modalStuff = (e) => {
        e.stopPropagation()
    }

    return (
        <Container onClick={modalStuff}>
            THIS IS THE WISHLIST MODAL... I DON'T UNDERSTAND WHAT THIS DOES ON THE EVOLV SITE
        </Container>
    )
}

export default HeartModal