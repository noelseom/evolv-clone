import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import { _getProducts } from '../../../api/productsAPI'

import ProductTableHeader from '../../../components/shop/productTableHeader'
import ProductTile from '../../shop/productTile'
import ShopFilter from '../../shop/productSort'

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

const defaultFilters = {
    climbingShoes: false,
    climbingAccessories: false,
    [`size_4`]: false,
    [`size_4.5`]: false,
    [`size_5`]: false,
    [`size_5.5`]: false,
    [`size_6`]: false,
    [`size_6.5`]: false,
    [`size_7`]: false,
    [`size_7.5`]: false,
    [`size_8`]: false,
    [`size_8.5`]: false,
    [`size_9`]: false,
    [`size_9.5`]: false,
    [`size_10`]: false,
    [`size_11`]: false,
    [`size_12`]: false,
    [`size_13`]: false
}

import { shopBlurb } from '../../../utils/blurbConstants'

const Shop = () => {
    const router = useRouter()

    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [filters, setFilters] = useState(defaultFilters)
    const [initialFilter, setInitialFilter] = useState(false)

    const productsRef = useRef({})
    const allProductsRef = useRef({})

    productsRef.current = products
    allProductsRef.current = allProducts

    const checkInitialFilter = (productsData) => {
        // if there is a param in log, use that param just once
        const path = router.asPath
        if ( path.includes('?')) {
            const param = path.split('?')[1].split('=')[0]
            const value = path.split('?')[1].split('=')[1] ?? ''

            let tempProducts = [...productsData]

            if (param === 'name') {    
                tempProducts = tempProducts.filter(product => product.name.includes(value))
            }
            else if (param === 'closeout') {
                tempProducts.sort((a, b) => a.cost - b.cost)
                
            }
            else if (param === 'climbingshoes') {
                tempProducts = tempProducts.filter(product => product.categories.includes('climbing_shoes'))
            }
            else if (param === 'climbingaccessories') {
                tempProducts = tempProducts.filter(product => product.categories.includes('climbing_accessories'))
            }

            setProducts([...tempProducts])
            setInitialFilter(true)
        }
    }

    const getProducts = async () => {
        const { products: productsData } = await _getProducts()
        
        // enables front end filtering
        setAllProducts([...productsData])
        setProducts([...productsData])
        if (!initialFilter) checkInitialFilter(productsData)
    }

    const filterProducts = (filterKey) => {
        let tempFilterObj = {...filters}

        tempFilterObj[filterKey] = !tempFilterObj[filterKey]

        let tempProducts = [...allProducts] 

        for (const filter in tempFilterObj) {
            if (filter === 'climbingShoes' && tempFilterObj[filter] === true) {
                tempProducts = tempProducts.filter(product => product.categories.includes('climbing_shoes'))
            }

            if (filter === 'climbingAccessories' && tempFilterObj[filter] === true) {
                tempProducts = tempProducts.filter(product => product.categories.includes('climbing_accessories'))
            }

            if (filter.includes('size_') && tempFilterObj[filter] === true) {
                const sizeToFilter = parseFloat(filter.split('_')[1])
                tempProducts = tempProducts.filter(product => product.availableSizes.includes(sizeToFilter))
            }
        }

        setProducts([...tempProducts])
        setFilters(tempFilterObj)
    }

    const sortProducts = (sortValue) => {
        setAllProducts(allProductsRef.current)
        setProducts(productsRef.current)

        const sortedProducts = [...products]

        if (sortValue === 0) {
            sortedProducts.sort((a, b) => a.id - b.id)
        }
        else if (sortValue === 1) {
            sortedProducts.sort((a, b) => b.cost - a.cost)
        }
        else if (sortValue === 2) {
            sortedProducts.sort((a, b) => a.cost - b.cost)
        }
        else if (sortValue === 3) {
            sortedProducts.sort((a, b) => (a.name > b.name) ? 1 : -1)
        }
        else if (sortValue === 4) {
            sortedProducts.sort((a, b) => (a.stars < b.stars) ? 1 : -1)
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
                        <ShopFilter filters={filters} filterProducts={filterProducts} />
                        <ResultsCount>{`Results: ${products.length}`}</ResultsCount>
                    </FilterBoxContainer>
                    <ProductView>
                        <ProductTableHeader sortProducts={sortProducts} />
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
