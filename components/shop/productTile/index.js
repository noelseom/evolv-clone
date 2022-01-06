import React, { useState } from 'react'
import Router from 'next/router'
import {
    Container,
    ProductImage,
    HeartImage,
    ProductName,
    ProductCost,
    QuickViewBox,
    QuickView
} from './style'

import Modal from '../../modals'
import ReviewStars from './reviewStars'

import { heartWhiteSvg, heartBlackSvg } from '../../../utils/constants'

const ProductTile = ({ product }) => {

    const [hovering, setHovering] = useState(false)
    const [productNameColor, setProductNameColor] = useState('black')
    const [isVisible, setIsVisible] = useState(false)

    // modal states
    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState(0) //0 - wishlist, 1 - quickview
    const [modalClicked, setModalClicked] = useState(false)

    const { id, cost, description, imageUrl, productUid, name, stars, reviewCount } = product

    const heartUrl = heartWhiteSvg // : heartBlackSvg
    const costString = String(cost).includes('.') ? `$${cost}` : `$${cost}.00`

    const gotoProductDetail = (e) => {
        if (!modalClicked) {
            // replace with item number
            Router.push({
                pathname: `/shop/product`,
                query: {productId: productUid}
            })
        } else {
            setModalClicked(false)
            setHovering(false)
            setProductNameColor('black')
        }
    }

    const startHovering = () => {
        setHovering(true)
        setProductNameColor('green')
    }

    const stopHovering = () => {
        setHovering(false)
        setProductNameColor('black')
    }

    const openHeartModal = (e) => {
        e.stopPropagation()

        setModalClicked(true)
        setModalType(0)
        setShowModal(true)
    }

    const openQuickViewModal = (e) => {
        e.stopPropagation()

        setModalClicked(true)
        setModalType(1)
        setShowModal(true)
    }

    const hideModal = () => setShowModal(false)
    
    const gotoModal = () => {
        setModalClicked(true)
        setModalType(3)
        setShowModal(true)
    }

    return (
        <Container style={{ display: (isVisible) ? 'flex' : 'none'}}
            onMouseEnter={startHovering}
            onMouseLeave={stopHovering}
            onClick={gotoProductDetail}
        >
            <ProductImage style={{ backgroundImage: `url(${imageUrl})` }}>
                <HeartImage
                    style={{ backgroundImage: `url(${heartUrl})` }}
                    onClick={openHeartModal}
                />
                <ProductCost style={{ color: productNameColor }}>{costString}</ProductCost>
            </ProductImage>
            {hovering && <QuickViewBox>
                <QuickView onClick={openQuickViewModal}>QUICK VIEW</QuickView>
            </QuickViewBox>}
            <ProductName style={{ color: productNameColor }}>{name}</ProductName>
            <ReviewStars stars={stars} reviewCount={reviewCount} setIsVisible={setIsVisible} />
            <Modal gotoModal={gotoModal} show={showModal} hideModal={hideModal} modalType={modalType} productUid={productUid} />
        </Container>
    )
}

export default ProductTile
