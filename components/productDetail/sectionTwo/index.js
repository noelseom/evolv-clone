import React, { useEffect, useState } from 'react'
import {
    Container,
    DescriptionBottom,
    DescriptionBottomTitle,
    DescriptionBox,
    DescriptionFeatures,
    DescriptionSpecifications,
    DetailsNavBar,
    DetailsNavButton,
    NavContainer,
    PaymentContainer,
    ShippingBottom,
    ShippingTitle,
} from './style'
import { descriptionBlurb, descriptionFeaturesBlurb, paymentBlurb, shippingBlurb, specificationsBlurb } from '../../../utils/blurbConstants'

// I could have these in a separate file but meh. If I get hired :D
const DescriptionWindow = () => {
    return (
        <NavContainer>
            <DescriptionBox>{descriptionBlurb}</DescriptionBox>
            <DescriptionBottom>
                <DescriptionFeatures>
                    <DescriptionBottomTitle>Features: </DescriptionBottomTitle>
                    {descriptionFeaturesBlurb}
                </DescriptionFeatures>
                <DescriptionSpecifications>
                    <DescriptionBottomTitle>Specifications: </DescriptionBottomTitle>
                    {specificationsBlurb}
                </DescriptionSpecifications>
            </DescriptionBottom>
        </NavContainer>
    )
}

const ShippingWindow = () => {
    return (<NavContainer>
        <ShippingTitle>We have partnered with UPS to ensure a delivery service that is fast and reliable. </ShippingTitle>
        <ShippingBottom>{shippingBlurb}</ShippingBottom>
    </NavContainer>)
}

const PaymentWindow = () => {
    return <PaymentContainer>{paymentBlurb}</PaymentContainer>
}

const DetailTwo = ({ setDetailThreeVisible }) => {
    const [navOption, setNavOption] = useState(1)

    // will come in handy later when more dynamic things are happening
    useEffect(() => {
        setDetailThreeVisible(true)
    }, [])

    const navigateView = (option) => setNavOption(option)

    const NavWindow =
        navOption === 1 ? DescriptionWindow : navOption === 2 ? ShippingWindow : PaymentWindow

    return (
        <Container>
            <DetailsNavBar>
                <DetailsNavButton
                    style={{ color: navOption === 1 ? 'black' : 'lightgrey' }}
                    onClick={() => navigateView(1)}
                >
                    DESCRIPTION
                </DetailsNavButton>
                <DetailsNavButton
                    style={{ color: navOption === 2 ? 'black' : 'lightgrey' }}
                    onClick={() => navigateView(2)}
                >
                    SHIPPING
                </DetailsNavButton>
                <DetailsNavButton
                    style={{ color: navOption === 3 ? 'black' : 'lightgrey' }}
                    onClick={() => navigateView(3)}
                >
                    PAYMENT
                </DetailsNavButton>
            </DetailsNavBar>
            <NavWindow />
        </Container>
    )
}

export default DetailTwo
