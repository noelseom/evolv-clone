import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'

import { _getProductDetails } from '../../../api/productsAPI'

import DetailOne from '../../productDetail/sectionOne'
import DetailTwo from '../../productDetail/sectionTwo'
import DetailThree from '../../productDetail/sectionThree'
import DetailFour from '../../productDetail/sectionFour'

import { SiteContainer } from '../../../mainStyle'
import { Container, DetailTwoLine } from './style'

import Modal from '../../modals'

const ProductDetail = () => {
    const router = useRouter()

    const [productDetails, setProductDetails] = useState({})
    const [detailOneVisible, setDetailOneVisible] = useState(false)
    const [detailTwoVisible, setDetailTwoVisible] = useState(false)
    const [detailThreeVisible, setDetailThreeVisible] = useState(false)
    const [detailFourVisible, setDetailFourVisible] = useState(false)

    const [showModal, setShowModal] = useState(false)
    const [modalType, setModalType] = useState(1)

    const hideModal = () => setShowModal(false)
    
    const gotoModal = (modalType) => {
        setModalType(modalType)
        setShowModal(true)
    }
    
    const getProductDetails = async(productUid) => {
        let productId = ''

        if (productUid !== undefined) {
            productId = productUid
        }
        else {
            const path = router.asPath
            productId = path.split('?')[1].split('=')[1]
        }

        if (productId !== productDetails.productUid) {
            setDetailOneVisible(false)
            setDetailTwoVisible(false)
            setDetailThreeVisible(false)
            setDetailFourVisible(false)

            const { product } = await _getProductDetails(productId)
            setProductDetails({...product})
            setDetailOneVisible(true)
        }
    }

    useEffect(() => {
        const handleRouteChange = () => {
            if (window.location.href.includes('productId')) {
                let path = window.location.href
                let productId = path.split('?')[1].split('=')[1]
                getProductDetails(productId)
            }
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
        };
      }, [router.events]);

    useEffect(() => {
        getProductDetails()

    },[])

    return (
        <SiteContainer>
            <Container>
                {detailOneVisible && <DetailOne setDetailTwoVisible={setDetailTwoVisible} productDetails={productDetails} gotoModal={gotoModal} onModal={false}/>}
                {detailTwoVisible && <><DetailTwo setDetailThreeVisible={setDetailThreeVisible} /><DetailTwoLine /></>}
                {detailThreeVisible && <><DetailThree setDetailFourVisible={setDetailFourVisible} getProductDetails={getProductDetails} /><DetailTwoLine /></>}
                {detailFourVisible && <DetailFour productUid={productDetails.productUid} gotoModal={gotoModal} />}
            </Container>
            <Modal show={showModal} hideModal={hideModal} modalType={modalType} productUid={productDetails.productUid} />
        </SiteContainer>
    )
}

export default ProductDetail