import React, { useEffect, useState } from 'react'

import { _getProductDetails } from '../../../api/productsAPI'

import DetailOne from '../../productDetail/sectionOne'

import { Container } from './style'

const QuickViewModal = ({ productUid, gotoModal }) => {
    const [productDetails, setProductDetails] = useState({})
    const [detailOneVisible, setDetailOneVisible] = useState(false)

    const modalStuff = (e) => {
        e.stopPropagation()
    }

    useEffect(() => {
        const getProductDetails = async() => {
            const { product } = await _getProductDetails(productUid)
            setProductDetails({...product})
            setDetailOneVisible(true)
        }

        getProductDetails()
    },[])

    return (
        <Container onClick={modalStuff}>
            {detailOneVisible && <DetailOne gotoModal={gotoModal} productDetails={productDetails} onModal={true}/>}
        </Container>
    )
}

export default QuickViewModal