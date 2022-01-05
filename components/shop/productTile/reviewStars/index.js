import React from 'react'
import { blackStarSvg, whiteStarSvg } from '../../../../utils/constants'

import { Container, StarImage } from './style'

const ReviewStars = ({ reviewScores }) => {

    const reviewScoreAvg = 4
    const reviewCountString = `(0)`


    return (
        <Container>
            <StarImage source={{ uri: whiteStarSvg }} />
            <StarImage source={{ uri: whiteStarSvg }} />
            <StarImage source={{ uri: whiteStarSvg }} />
            <StarImage source={{ uri: whiteStarSvg }} />
            <StarImage source={{ uri: whiteStarSvg }} />

        </Container>
    )

}

export default ReviewStars