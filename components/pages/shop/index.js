import React, { useState, useEffect, useRef } from 'react'

import { _getProducts } from '../../../api/productsAPI'

import ProductTableHeader from '../../../components/shop/productTableHeader'
import ProductTile from '../../shop/productTile'

import { SiteContainer } from '../../../mainStyle'
import {
    Container,
    Blurb,
    ShopWindow,
    FilterBoxContainer,
    ProductView,
    ProductTable,
    ResultsCount,
} from './style'

import { shopBlurb } from '../../../utils/blurbConstants'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [productCount, setProductCount] = useState(0)
    const [sortDown, setSortDown] = useState(true)

    const productsRef = useRef({})
    const allProductsRef = useRef({})

    productsRef.current = products
    allProductsRef.current = allProducts

    const getProducts = async () => {
        const { products: productsData } = await _getProducts()
        
        // enables front end filtering
        setAllProducts([...productsData])
        setProducts([...productsData])
        
        setProductCount(productsData.length)
    }

    const sortProducts = (sortValue) => { //1 - Maximum Price, 2 - Min, 3 - Name
        setAllProducts(allProductsRef.current)
        setProducts(productsRef.current)

        const sortedProducts = [...products]

        if (sortValue === 1) {
            sortedProducts.sort((a, b) => b.cost - a.cost)
        }
        else if (sortValue === 2) {
            sortedProducts.sort((a, b) => a.cost - b.cost)
        }
        else if (sortValue === 3) {
            sortedProducts.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }

        setProducts([...sortedProducts])
    }



    useEffect(() => {
        getProducts()
    }, [])

    return (
        <SiteContainer>
            <Container>
                <Blurb>{shopBlurb}</Blurb>
                <ShopWindow>
                    {/* this will be replaced */}
                    <FilterBoxContainer>
                        <ResultsCount>{`Results: ${productCount}`}</ResultsCount>
                    </FilterBoxContainer>
                    <ProductView>
                        <ProductTableHeader productCount={productCount} sortProducts={sortProducts} />
                        <ProductTable>
                            {products.map((product, index) => (
                                <ProductTile key={product.id} product={product}></ProductTile>
                            ))}
                        </ProductTable>
                    </ProductView>
                </ShopWindow>
            </Container>
        </SiteContainer>
    )
}

export default Shop
