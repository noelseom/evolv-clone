import React, { Fragment } from 'react'
import Link from 'next/link'

import TopCarousel from '../../home/topCarousel'
import ShoesCarousel from '../../home/shoesCarousel'

import { SiteContainer } from '../../../mainStyle'

import {
    BannerTileContainer,
    Container,
    ShoesCarouselWindow,
    BannerTile,
    BannerInner,
    ButtonLink,
    BannerContainer,
    BigBannerInner,
    ShoesCarouselBannerOne,
    ShoesCarouselBannerTwo,
    ShoesCarouselBox,
    ShoeTile,
} from './style'

const Home = () => {
    return (
        <SiteContainer>
            <Container>
                <TopCarousel />
                <ShoesCarouselWindow>
                    <ShoesCarouselBannerOne>
                        CLIMBING SHOP: ROCK & VERTICAL CLIMBING, BOULDER
                    </ShoesCarouselBannerOne>
                    <ShoesCarouselBannerTwo>
                        TOP SELLING CLIMBING SHOES
                    </ShoesCarouselBannerTwo>
                    <ShoesCarouselBox>
                        <ShoesCarousel />
                    </ShoesCarouselBox>
                </ShoesCarouselWindow>
                <BannerTileContainer>
                    <BannerTile
                        style={{
                            backgroundImage: `url(https://www.evolvsports.com/media/image/fb/bb/ea/Rebel_MobileWDg9oMmK19gWR.jpg)`,
                        }}
                    >
                        <BannerInner>
                            Street Shoes
                            <Link href={'/shop?name=Rebel'}>
                                <ButtonLink>SHOP NOW</ButtonLink>
                            </Link>
                        </BannerInner>
                    </BannerTile>
                    <BannerTile
                        style={{
                            backgroundImage: `url(https://www.evolvsports.com/media/image/35/df/be/Geshido_M_Lace_Mobile.jpg)`,
                        }}
                    >
                        <BannerInner>
                            Climbing Shoes
                            <Link href={'/shop?climbingshoes'}>
                                <ButtonLink>SHOP NOW</ButtonLink>
                            </Link>
                        </BannerInner>
                    </BannerTile>
                    <BannerTile
                        style={{
                            backgroundImage: `url(https://www.evolvsports.com/media/image/f1/74/53/hangboard_IG_3.jpg)`,
                        }}
                    >
                        <BannerInner>
                            Climbing Essentials
                            <Link href={'/shop?climbingaccessories'}>
                                <ButtonLink>SHOP NOW</ButtonLink>
                            </Link>
                        </BannerInner>
                    </BannerTile>
                </BannerTileContainer>
                <BannerContainer
                    style={{
                        backgroundImage: `url(https://www.evolvsports.com/media/image/a9/d1/06/team-evolv-banner.jpg)`,
                    }}
                >
                    <BigBannerInner>
                        Team Evolv
                        <Link href={'/team-evolv'}>
                            <ButtonLink>MEET OUR ATHLETES</ButtonLink>
                        </Link>
                    </BigBannerInner>
                </BannerContainer>
                <BannerContainer
                    style={{
                        backgroundImage: `url(https://www.evolvsports.com/media/image/05/eb/5d/Retail-Store-1_1920x1920.jpg)`,
                        backgroundPosition: 'center center',
                    }}
                >
                    <BigBannerInner>
                        Try Before You Buy
                        <Link href={'/shop'}>
                            <ButtonLink>SHOP LOCAL</ButtonLink>
                        </Link>
                    </BigBannerInner>
                </BannerContainer>
            </Container>
        </SiteContainer>
    )
}

export default Home
