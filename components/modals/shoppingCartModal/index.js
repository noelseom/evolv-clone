import React, { useEffect, useState } from 'react'

import { localCartKey } from '../../../utils/constants'

import {
    CartBar,
    Container,
    HeaderBar,
    ViewCartButton,
    CartItem,
    CartImage,
    CartItemDetails,
    CartItemDetailsTop,
    CartItemDetailsBottom,
    DeleteButton,
    SubTotalBar,
    SubTotalText,
    CostWindow,
    CheckoutBar,
    CheckoutButton,
    AddedBanner,
} from './style'

const CardItemCard = ({ removeItemFromCart, item }) => {
    // let parsedItem = JSON.parse(item)
    const { cost, size, quantity, imageUrl, name, productUid } = item

    const topString = `${quantity} x ${name} - ${size}`
    const costString = String(cost).includes('.') ? `$${cost}` : `$${cost}.00`

    return (
        <CartItem>
            <CartImage source={{ uri: imageUrl }} />
            <CartItemDetails>
                <CartItemDetailsTop>{topString}</CartItemDetailsTop>
                <CartItemDetailsBottom>{costString}</CartItemDetailsBottom>
                <DeleteButton onClick={() => removeItemFromCart(productUid, size)}>X</DeleteButton>
            </CartItemDetails>
        </CartItem>
    )
}

const ShoppingCartModal = () => {
    const [cartItems, setCartItems] = useState([])
    const [subTotal, setSubTotal] = useState(0)
    const [addedHeaderVisible, setAddedHeaderVisible] = useState(true)

    const addedString = `The product was successfully added to your shopping cart`

    const stopInnerClick = (e) => {
        e.stopPropagation()
    }

    const getCartItems = () => {
        const cartString = window.localStorage.getItem(localCartKey)
        let tempSubTotal = 0

        if (cartString !== null && cartString.length > 0) {
            const cart = JSON.parse(window.localStorage.getItem(localCartKey))
            let tempCart = []

            for (const item in cart) {
                // console.log({ item })
                tempSubTotal += cart[item].cost * cart[item].quantity
                tempCart.push(cart[item])
            }

            setSubTotal(tempSubTotal)
            setCartItems([...tempCart])
        } else {
            setCartItems([...[]])
        }
    }

    const removeItemFromCart = (productUid, size) => {
        const itemKey = `${productUid}_${size}`

        const cart = JSON.parse(window.localStorage.getItem(localCartKey))
        delete cart[itemKey]

        window.localStorage.setItem(localCartKey, JSON.stringify(cart))
        setAddedHeaderVisible(false)
        getCartItems()
    }

    useEffect(() => {
        getCartItems()
    }, [])

    return (
        <Container onClick={stopInnerClick}>
            <HeaderBar>YOUR SHOPPING CART</HeaderBar>
            {addedHeaderVisible && <AddedBanner>{addedString}</AddedBanner>}
            <CartBar>
                {cartItems.length > 0 ? (
                    cartItems.map((item, i) => (
                        <CardItemCard removeItemFromCart={removeItemFromCart} key={i} item={item} />
                    ))
                ) : (
                    <div></div>
                )}
            </CartBar>
            <SubTotalBar>
                <SubTotalText>SUBTOTAL AMOUNT:</SubTotalText>
                <CostWindow>
                    {String(subTotal).includes('.') ? `$${subTotal}` : `$${subTotal}.00`}
                </CostWindow>
            </SubTotalBar>
            <CheckoutBar>
                <CheckoutButton>CHECKOUT</CheckoutButton>
                <ViewCartButton>YOUR CART</ViewCartButton>
            </CheckoutBar>
        </Container>
    )
}

export default ShoppingCartModal
