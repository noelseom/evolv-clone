import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'

import Router from 'next/router'

import { SiteContainer } from '../../../mainStyle'
import { mainViewWidth } from '../../../utils/constants'

import {
    BlurbContainer,
    CarouselButton,
    CarouselContainer,
    CarouselWindow,
    Container,
    CustomImg,
    CustomInsider,
    HoursContainer,
    SubtitleContainer,
    TempImage,
    TitleBar,
} from './style'

const subTitle =
    'Stop by our Evolv Pro Shop at our Tustin, CA headquarters and get equipped by the climbing shoe experts! We carry the FULL range of Evolv climbing and street shoes, as well as accessories, so that you can select the perfect fit for you.'

const blurb = `If you’re in need of some sport or trad gear, we also carry a full selection of technical products from Wild Country. Belay devices, carabiners, quickdraws, cams, nuts, you name it, we’ve got it!

Need your shoes resoled? We have that covered too! Bring your ratty shoes in so that Yosemite Bum Resoles can bring them back to life. Our master cobblers can bring most shoes back from the dead, reducing waste and rejuvenating the performance and fitment that the shoe had when it was new, without the break-in period. #ReduceReuseResole`

const hoursBlurb = `Hours: Monday – Friday, 9am - 430pm

Phone: 714-522-5556

Address: 1421 Edinger Ave, Unit D, Tustin, CA 92780`

const test = [1,2,3]

const RetailStore = () => {

    const gotoYBR = () => window.open('https://www.yosemitebum.com/', '_blank')
    const gotoStore = () => Router.push({pathname: '/shop'})


    return (
        <SiteContainer>
            <Container >
                <TitleBar>Evolv Retail Store</TitleBar>
                <Carousel bsPrefix={``} as={CarouselContainer} touch='true' >
                    <Carousel.Item bsPrefix={``} >
                        <CarouselWindow style={{ backgroundImage: `url(https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/pic6.png)`}}>
                            <CarouselButton onClick={gotoStore}>Shop Evolv Online</CarouselButton>
                        </CarouselWindow>
                    </Carousel.Item>
                    <Carousel.Item bsPrefix={``}>
                        <CarouselWindow style={{ backgroundImage: `url(https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/pic7.png)`}}>
                            <CarouselButton onClick={gotoYBR}>Yosemite Bum Resole</CarouselButton>
                        </CarouselWindow>
                    </Carousel.Item>
                </Carousel>
                <SubtitleContainer>{subTitle}</SubtitleContainer>
                <BlurbContainer>{blurb}</BlurbContainer>
                <HoursContainer>{hoursBlurb}</HoursContainer>
            </Container>
        </SiteContainer>
    )
}

export default RetailStore
