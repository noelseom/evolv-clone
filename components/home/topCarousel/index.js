import Router from 'next/router'
import React from 'react'
import Link from 'next/link'

import { Carousel } from 'react-bootstrap'

import { topCarouselOptions } from '../../../utils/constants'

import { ButtonLink, CarouselItem, Container, Slide, Title } from './style'

const TopCarousel = () => {

    const gotoPath = (path) => {
        console.log('path hit')
        console.log({ path })
        // Router.push({pathname: path})
    }

    return (
    <Carousel bsPrefix={``} as={Container} touch='true' >
        <Carousel.Item as={CarouselItem} bsPrefix={``}>
            <Slide style={{ backgroundImage: `url(${topCarouselOptions[0].imageUrl})`}}>
                <Title>{topCarouselOptions[0].titleText}</Title>
                <Link href={topCarouselOptions[0].path}>
                <ButtonLink >{topCarouselOptions[0].buttonText}</ButtonLink>
                </Link>
            </Slide>
        </Carousel.Item>
        <Carousel.Item as={CarouselItem} bsPrefix={``}>
            <Slide style={{ backgroundImage: `url(${topCarouselOptions[1].imageUrl})`}}>
                <Title>{topCarouselOptions[1].titleText}</Title>
                <Link href={topCarouselOptions[1].path}>
                <ButtonLink >{topCarouselOptions[1].buttonText}</ButtonLink>
                </Link>
            </Slide>
        </Carousel.Item>
        <Carousel.Item as={CarouselItem} bsPrefix={``}>
            <Slide style={{ backgroundImage: `url(${topCarouselOptions[2].imageUrl})`}}>
                <Title>{topCarouselOptions[2].titleText}</Title>
                <Link href={topCarouselOptions[2].path}>
                <ButtonLink >{topCarouselOptions[2].buttonText}</ButtonLink>
                </Link>
            </Slide>
        </Carousel.Item>
        <Carousel.Item as={CarouselItem} bsPrefix={``}>
            <Slide style={{ backgroundImage: `url(${topCarouselOptions[3].imageUrl})`}}>
                <Title>{topCarouselOptions[3].titleText}</Title>
                <Link href={topCarouselOptions[3].path}>
                <ButtonLink >{topCarouselOptions[3].buttonText}</ButtonLink>
                </Link>
            </Slide>
        </Carousel.Item>
    </Carousel>)
}

export default TopCarousel