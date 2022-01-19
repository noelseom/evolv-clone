import React, { useEffect, useState } from 'react'
import Router from 'next/router'

import ReviewStars from '../../shop/productTile/reviewStars'

import { blackStarSvg, blackTruckSvg, heartBlackSvg, whiteStarSvg, localCartKey } from '../../../utils/constants'

import {
    Container,
    ImageWindow,
    ProductIdBar,
    DeliveryBar,
    ProductImage,
    ReviewBar,
    TitleBar,
    WindowRight,
    WriteReviewSection,
    ColoredCircle,
    CostBar,
    MinorDescriptionBar,
    ColorBar,
    ProductColorCircle,
    BottomRight,
    SizeQuantityBar,
    SizeQuantitySelect,
    PurchaseBar,
    AddToCartButton,
    PayPalButton,
    FreeReturnsBar,
    BottomIcon,
    RememberWindow,
    ViewDetailsButton,
    SizeQuantityOption,
} from './style'
import { StarImage } from '../../shop/productTile/reviewStars/style'

const starCount = [1, 2, 3, 4, 5]

const DetailOne = ({ gotoModal, setDetailTwoVisible, productDetails, onModal }) => {
    const [visible, setVisible] = useState(false)
    const [sizes, setSizes] = useState(0)
    const [sizeQuantity, setSizeQuantity] = useState(0)

    const [chosenSize, setChosenSize] = useState('')
    const [chosenQuantity, setChosenQuantity] = useState('')

    const isOnModal = onModal ?? false

    const { imageUrl, name, productUid, cost } = productDetails

    const reviewCountString = `(${productDetails.reviewCount})`
    const productIdString = `Item Number: ${productUid}`
    const deliveryString = 'Delivery time appr. 2-4 workdays'
    const costString = String(cost).includes('.') ? `$${String(cost)}` : `$${String(cost)}.00`
    const minorDescriptionString = `some minor description goes here about how cool and amazing this one of a kind Evolv product is.`
    const secondMinorDescriptionString = `some secondary description goes here about additional shipping costs or coupons or anything else.`
    const addToCardString = `ADD TO SHOPPING CART`
    const paypalString = `PayPal Checkout`
    const viewDetailsString = `VIEW DETAILS`

    const buttonWidth = isOnModal ? '90%' : '100%'
    const buttonAlignment = isOnModal ? 'start' : 'end'
    const buttonBottomMargin = isOnModal ? 20 : 0

    const gotoDetails = () => {
        const { productUid } = productDetails
        Router.push({
            pathname: `/shop/product`,
            query: { productId: productUid },
        })
    }

    const setSizeQuantityDropdown = (size) => {
        const { sizeCounts } = productDetails
        // console.log({ sizeCounts })
        let quantity = 0

        if (sizeCounts.length === 0) quantity = Math.floor(Math.random() * 20 + 1)
        else {
            quantity = sizeCounts.filter((x) => x.size === size)[0].count
        }

        let quantityArray = []

        for (let i = 0; i < quantity; i++) {
            quantityArray.push(i + 1)
        }

        setSizeQuantity([...quantityArray])
        setChosenQuantity(quantityArray[0])
    }

    const sizeDropdownOptions = () => {
        const { sizeCounts } = productDetails

        const tempSizes = []

        if (sizeCounts.length === 0) {
            tempSizes = ['UNI']
        } else {
            tempSizes = sizeCounts.map((x) => {
                let sizeSlot = {
                    size: x.size, 
                    sizeText: `${x.size} Boys = ${x.size+1} Women`
                }

                return sizeSlot
            })
        }

        console.log({ tempSizes })

        setSizes([...tempSizes])
        setSizeQuantityDropdown(tempSizes[0].size)
        setChosenSize(tempSizes[0])
    }

    useEffect(() => {
        sizeDropdownOptions()
        setVisible(true)
        if (setDetailTwoVisible) {
            setDetailTwoVisible(true)
        }
    }, [])

    const openReviewModal = () => gotoModal(2)
    const openShoppingCart = () => gotoModal(3)

    const addToShoppingCart = () => {        
        let cartObjKey = `${productUid}_${chosenSize}`

        let cartObj = {
            productUid,
            cost,
            size: chosenSize, 
            quantity: chosenQuantity,
            imageUrl,
            name,
        }

        let evolvLocalCartString = window.localStorage.getItem(localCartKey) || ''

        // cart exists
        if (evolvLocalCartString.length > 0) {
            let evolvLocalCart = JSON.parse(window.localStorage.getItem(localCartKey))
            let existingCartObj = evolvLocalCart[cartObjKey]

            // item does not already exist in cart
            if (existingCartObj === undefined) { 
                evolvLocalCart[cartObjKey] = cartObj
            }
            // item already exists in cart 
            else {
                existingCartObj.quantity += chosenQuantity
                evolvLocalCart[cartObjKey] = existingCartObj
            }

            window.localStorage.setItem(localCartKey, JSON.stringify(evolvLocalCart))
        }
        // cart does not exist
        else {
            let newCart = {}
            newCart[cartObjKey] = cartObj
            window.localStorage.setItem(localCartKey, JSON.stringify(newCart))

        }

        // window.localStorage.removeItem(localCartKey)
        // window.localStorage.clear()

        openShoppingCart()
    }

    const sizeChange = ({ target }) => {
        const targetSize = parseFloat(target.value)
        const targetKey = target.text
        console.log({ targetSize, targetKey })
        setSizeQuantityDropdown(targetSize)
        setChosenSize(targetSize)
    }

    return (
        visible && (
            <Container>
                <ImageWindow>
                    <ProductImage source={{ uri: imageUrl }} />
                </ImageWindow>
                <WindowRight>
                    <TitleBar>{name}</TitleBar>
                    {!isOnModal && (
                        <ReviewBar>
                            {productDetails.stars.map((x, i) =>
                                x === 1 ? (
                                    <StarImage key={i} source={{ uri: blackStarSvg }} />
                                ) : (
                                    <StarImage key={i} source={{ uri: whiteStarSvg }} />
                                )
                            )}
                            {reviewCountString}
                            <WriteReviewSection onClick={openReviewModal}>
                                Write A Review!
                            </WriteReviewSection>
                        </ReviewBar>
                    )}
                    <ProductIdBar>{productIdString}</ProductIdBar>
                    <DeliveryBar>
                        <ColoredCircle />
                        {deliveryString}
                    </DeliveryBar>
                    <CostBar>{costString}</CostBar>
                    <MinorDescriptionBar style={{ fontSize: 14 }}>
                        {minorDescriptionString}
                    </MinorDescriptionBar>
                    <ColorBar>
                        <ProductColorCircle style={{ backgroundColor: 'black' }} />
                        <ProductColorCircle style={{ backgroundColor: 'blue' }} />
                        <ProductColorCircle style={{ backgroundColor: 'red' }} />
                        <ProductColorCircle style={{ backgroundColor: 'green' }} />
                    </ColorBar>
                    <MinorDescriptionBar style={{ fontSize: 12, fontWeight: 'bold' }}>
                        {secondMinorDescriptionString}
                    </MinorDescriptionBar>
                    <BottomRight style={{ bottom: buttonBottomMargin }}>
                        <SizeQuantityBar>
                            Size:{' '}
                            <SizeQuantitySelect onChange={(e) => sizeChange(e)}>
                                {sizes.map((slot, index) => (
                                    <SizeQuantityOption key={index} value={slot.size}>{slot.sizeText}</SizeQuantityOption>
                                ))}
                            </SizeQuantitySelect>
                            Quantity:{' '}
                            <SizeQuantitySelect onChange={(e) => setChosenQuantity(parseInt(e.target.value))} >
                                {sizeQuantity.map((quantity, index) => (
                                    <SizeQuantityOption key={index}>{quantity}</SizeQuantityOption>
                                ))}
                            </SizeQuantitySelect>
                        </SizeQuantityBar>
                        <PurchaseBar style={{ alignItems: buttonAlignment }}>
                            <AddToCartButton onClick={addToShoppingCart} style={{ width: buttonWidth }}>
                                {addToCardString}
                            </AddToCartButton>
                            {!isOnModal && <PayPalButton>{paypalString}</PayPalButton>}
                            {isOnModal && (
                                <ViewDetailsButton
                                    onClick={gotoDetails}
                                    style={{ width: buttonWidth }}
                                >
                                    {viewDetailsString}
                                </ViewDetailsButton>
                            )}
                        </PurchaseBar>
                        {!isOnModal && (
                            <FreeReturnsBar>
                                <RememberWindow>
                                    <BottomIcon source={{ uri: heartBlackSvg }} />
                                    REMEMBER
                                </RememberWindow>
                                <BottomIcon source={{ uri: blackTruckSvg }} />
                                FREE RETURNS
                            </FreeReturnsBar>
                        )}
                    </BottomRight>
                </WindowRight>
            </Container>
        )
    )
}

export default DetailOne
