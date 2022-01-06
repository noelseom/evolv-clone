import React, { useEffect, useState } from 'react'

import { _getProductReviews } from '../../../api/productsAPI'

import { whiteStarSvg, blackStarSvg } from '../../../utils/constants'

import {
    Container,
    ReviewCard,
    ReviewCardHeader,
    ReviewName,
    ReviewQuestionBottom,
    ReviewQuestionTitle,
    ReviewText,
    StarImage
} from './style'

const ReviewSection = ({ review }) => {
    const { stars, username, reviewText } = review

    const ReviewStars = () => {
        let starArray = []

        for (let i = 0; i < 5; i++) {
            if (i < stars) starArray.push(<StarImage source={{uri: blackStarSvg}} />)
            else starArray.push(<StarImage source={{uri: whiteStarSvg}} />)
        }

        return starArray
    }

    return (
        <ReviewCard>
            <ReviewCardHeader>
                {ReviewStars()}
                <ReviewName>- {username}</ReviewName>
            </ReviewCardHeader>
            <ReviewText>{reviewText}</ReviewText>
        </ReviewCard>
    )
}

const NoReviewSection = ({ gotoModal }) => {
    const gotoReviewModal = () => gotoModal(2)
    return (
        <ReviewQuestionBottom onClick={gotoReviewModal}>Be the first to leave a review!</ReviewQuestionBottom>
    )
}

const DetailFour = ({ gotoModal, productUid }) => {
    const [isVisible, setIsVisible] = useState(true)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviews = async () => {
            const { productReviews } = await _getProductReviews(productUid)
            // console.log({ productReviews })
            setReviews([...productReviews])
        }
        getReviews()
        setIsVisible(true)
    }, [])

    //reviews.map((review, i) => <ReviewSection key={i} review={review} />)

    const ReviewBottom =
        reviews.length > 0 ? (
            reviews.map((review, i) => <ReviewSection key={i} review={review} />)
        ) : (
            <NoReviewSection gotoModal={gotoModal} />
        )

    return (
        isVisible && (
            <Container>
                <ReviewQuestionTitle>REVIEWS</ReviewQuestionTitle>
                {ReviewBottom}
                <ReviewQuestionTitle style={{ marginTop: 50 }}>Got Questions?</ReviewQuestionTitle>
            </Container>
        )
    )
}

export default DetailFour
