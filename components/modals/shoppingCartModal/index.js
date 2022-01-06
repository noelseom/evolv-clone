import React, { useEffect, useState } from 'react'

import { localCartKey } from '../../../utils/constants'

import { CartBar, Container, HeaderBar, CartItem, CartImage, CartItemDetails, CartItemDetailsTop, CartItemDetailsBottom, DeleteButton } from './style'

const CardItemCard = ({ removeItemFromCart, item }) => {
    // let parsedItem = JSON.parse(item)
    const {cost, size, quantity, imageUrl, name, productUid} = item

    let tempString = `${quantity} x ${name} - ${size}, $${cost}`

    const topString = `${quantity} x ${name} - ${size}`
    const costString = (String(cost).includes('.')) ? `$${cost}` : `$${cost}.00`

    return <CartItem>
        <CartImage source={{uri: imageUrl}} />
        <CartItemDetails>
            <CartItemDetailsTop>{topString}</CartItemDetailsTop>
            <CartItemDetailsBottom>{costString}</CartItemDetailsBottom>
            <DeleteButton onClick={() => removeItemFromCart(productUid)}>X</DeleteButton>
        </CartItemDetails>
    </CartItem>
}

const ShoppingCartModal = () => {
    const [cartItems, setCartItems] = useState([])
    const [addedHeaderVisible, setAddedHeaderVisible] = useState(true)

    const stopInnerClick = (e) => {
        e.stopPropagation()
    }

    const removeItemFromCart = () => {
        // remove from object
    }

    const getCartItems = () => {
        const cartString = window.localStorage.getItem(localCartKey)

        if (cartString !== null && cartString.length > 0) {
            const cart = JSON.parse(window.localStorage.getItem(localCartKey))
            let tempCart = []

            for (const item in cart) {
                // console.log({ item })
                tempCart.push(cart[item])
            }

            console.log({ tempCart})

            setCartItems([...tempCart])
            
        } else {
            setCartItems([...[]])
        }
    }

    useEffect(() => {
        getCartItems()
    }, [])

    return (
        <Container onClick={stopInnerClick}>
            <HeaderBar>YOUR SHOPPING CART</HeaderBar>
            <CartBar>
                {(cartItems.length > 0) ?
                cartItems.map((item, i) => <CardItemCard key={i} item={item} />) :
                <div></div>
                }
            </CartBar>
        </Container>
    )
}

export default ShoppingCartModal
