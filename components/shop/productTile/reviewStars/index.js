import React, { useEffect } from 'react'
import { blackStarSvg, whiteStarSvg } from '../../../../utils/constants'

import { Container, ReviewCountDiv, StarImage } from './style'

const ReviewStars = ({ stars, reviewCount, setIsVisible }) => {

    const reviewCountString = `(${reviewCount})`

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <Container>
           {stars.map((star, i) => (star === 1) ? <StarImage key={i} source={{ uri: blackStarSvg }} /> : <StarImage key={i} source={{ uri: whiteStarSvg }} />)}
           {reviewCountString}

        </Container>
    )

}

export default ReviewStars