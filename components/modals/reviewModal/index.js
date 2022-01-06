import React, { useState } from 'react'

import { _reviewProduct } from '../../../api/productsAPI'

import {
    Container,
    HeaderBar,
    StarsBar,
    TextSection,
    UsernameBar,
    UsernameInput,
    LabelText,
    StarsSelect,
    StarsOption,
    ReviewTextArea,
    SubmitButton,
    SubmitBar
} from './style'

const ReviewModal = ({ productUid }) => {
    const [username, setUsername] = useState('')
    const [stars, setStars] = useState(1)
    const [reviewText, setReviewText] = useState('')

    const stopInnerClick = (e) => {
        e.stopPropagation()
    }

    const submitReview = async() => {
        const data = { username, stars, reviewText, productUid }

        await _reviewProduct(data)

        location.reload()
    }

    return (
        <Container onClick={stopInnerClick}>
            <HeaderBar>Leave a review!</HeaderBar>
            <UsernameBar>
                <LabelText>Name: </LabelText>
                <UsernameInput onChange={(e) => setUsername(e.target.value)}></UsernameInput>
            </UsernameBar>
            <StarsBar>
                <LabelText>Stars: </LabelText>
                <StarsSelect onChange={(e) => setStars(parseInt(e.target.value))}>
                    <StarsOption>1</StarsOption>
                    <StarsOption>2</StarsOption>
                    <StarsOption>3</StarsOption>
                    <StarsOption>4</StarsOption>
                    <StarsOption>5</StarsOption>
                </StarsSelect>
            </StarsBar>
            <TextSection>
                <ReviewTextArea onChange={(e) => setReviewText(e.target.value)} placeholder='Tell us what you think!'>
                </ReviewTextArea>
            </TextSection>
            <SubmitBar>
                <SubmitButton onClick={submitReview}>Submit</SubmitButton>
            </SubmitBar>
        </Container>
    )
}

export default ReviewModal
