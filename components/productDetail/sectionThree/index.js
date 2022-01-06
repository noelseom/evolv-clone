import React, { useEffect, useState } from 'react'
import Router from 'next/router'


import { _getRelatedProducts } from '../../../api/productsAPI'

import { Container, RelatedItemsBody, RelatedItemsTitle, RelatedProductTileContainer, ProductImage, ProductName } from './style'

const RelatedProductTile = ({ getProductDetails, product }) => {
    const {productUid, name, imageUrl} = product

    const gotoProductDetail = () => {
        Router.push({
            pathname: `/shop/product`,
            query: {productId: productUid}
        })
        getProductDetails(productUid)
    }

    return <RelatedProductTileContainer onClick={gotoProductDetail}>
        <ProductImage source={{ uri: imageUrl }} />
        <ProductName>{name}</ProductName>
    </RelatedProductTileContainer>
}

const DetailThree = ({ setDetailFourVisible, getProductDetails}) => {
    const [relatedProducts, setRelatedProducts] = useState([])
    const [isVisible, setIsVisible] = useState(true)
    
    useEffect(() => {
        const getRelatedProducts = async() => {
            const { relatedProducts: relatedProductsRet} = await _getRelatedProducts()
            setRelatedProducts([...relatedProductsRet])
            setIsVisible(true)
        }

        getRelatedProducts()
        setDetailFourVisible(true)
    }, [])

    return (isVisible && <Container>
        <RelatedItemsTitle>RELATED ITEMS</RelatedItemsTitle>
        <RelatedItemsBody>
            {relatedProducts.map((product, index) => <RelatedProductTile getProductDetails={getProductDetails} product={product} key={index} />)}
        </RelatedItemsBody>
    </Container>)
}

export default DetailThree