import React, { useEffect, useState } from 'react'
import { Container, TileContainer, Tile, ArrowContainerLeft, ArrowContainerRight, ArrowBox, Arrow, ShoeImage } from './style'
import { rightArrow, leftArrow } from '../../../utils/constants'
import Link from 'next/link'

const delay = (millis) =>
    new Promise((resolve, reject) => {
        setTimeout((_) => resolve(), millis)
    })

const niceShoesArray = [
    {
        name: `Geshido Lace Women's`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/geshido_lace_women.png',
        path: '/shop/product?productId=6aaed25a-03ac-4b14-aeeb-76b28e010768'
    },
    {
        name: `Geshido Lace Men's`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/geshido_lace_women.png',
        path: '/shop/product?productId=6aaed25a-03ac-4b14-aeeb-76b28e010768'
    },
    {
        name: `Zenist Women's`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/geshido_lace_men.png',
        path: '/shop/product?productId=83f404d6-e936-46d1-a8d5-4871509be399'
    },
    {
        name: `Zenist Men's`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/zenist_men.png',
        path: '/shop/product?productId=6fad4eee-d679-47eb-9d27-f0ad0421f542'
    },
    {
        name: `Geshido Velcro Men's`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/geshido_velcro_men.png',
        path: '/shop/product?productId=f6543977-dc7b-4996-b1ea-6a0abeac0dca'
    },
    {
        name: `Geshido Velcro Women's`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/geshido_velcro_women.png',
        path: '/shop/product?productId=cc776433-2142-4283-a4a7-eea4c550b414'
    },
    {
        name: `Elektra Lace`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/elektra_lace.png',
        path: '/shop/product?productId=f6a19d50-e390-45f3-81d7-5a26710ba4a4'
    },
    {
        name: `Defy Lace`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/defy_lace.png',
        path: '/shop/product?productId=a5a9aac0-fca4-45bf-bfe9-a2665644b32e'
    },
    {
        name: `Ashima x Brain Dead`,
        imageUrl: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/ashima_zenist.png',
        path: '/shop/product?productId=3768ffb1-374b-4a5a-a8cc-49344605ab74'
    }
]

const ShoeTile = ({ shoe }) => {

    const { name, path, imageUrl} = shoe

    return <Link href={path}>
        <Tile>
            <ShoeImage source={{uri: imageUrl}} /> {name}
        </Tile>
    </Link>
}

const ShoesCarousel = () => {
    const [visibleTiles, setVisibleTiles] = useState([])
    const [startIndex, setStartIndex] = useState(0)
    const [sliderClassName, setSliderClassName] = useState('')
    const [visible, setVisible] = useState(false)
    const [slideDirection, setSlideDirection] = useState(0)

    const resetClassName = () => {

        let tempIndex = startIndex

        if (slideDirection === 0) {
            tempIndex = ((tempIndex - 1) < 0) ? niceShoesArray.length - 1 : tempIndex - 1
        }
        else {
            tempIndex = ((tempIndex + 1) > (niceShoesArray.length - 1)) ? 0 : tempIndex + 1
        }

        let tempArray = []
        // console.log({ startIndex})
        for (let i = tempIndex; i < (tempIndex + 6); i++) {
            let index = i%(niceShoesArray.length)
            // console.log(index)
            tempArray.push(niceShoesArray[index])
        }
        setStartIndex(tempIndex)
        setVisibleTiles([...tempArray])
        setSliderClassName('')
    }
    
    const slideLeft = () => {
        setSlideDirection(0)
        setSliderClassName('shoesliderleft')
    }

    const slideRight = () => {
        setSlideDirection(1)
        setSliderClassName('shoessliderright')
    }

    useEffect(() => {
        let tempArray = niceShoesArray.slice(0, 6)
        setVisibleTiles([...tempArray])
        setVisible(true)
    }, [])

    return (
        (visible && <Container>
            <ArrowContainerLeft>
                <ArrowBox onClick={slideLeft}>
                    <Arrow source={{uri: leftArrow}} />
                </ArrowBox>
            </ArrowContainerLeft>
            <TileContainer className={sliderClassName} onAnimationEnd={resetClassName} >
                {visibleTiles.map((t, i) => (
                    <ShoeTile key={i} shoe={t} />
                ))}
            </TileContainer>
            <ArrowContainerRight>
                <ArrowBox onClick={slideRight}>
                    <Arrow source={{uri: rightArrow}} />
                </ArrowBox>
            </ArrowContainerRight>
        </Container>)
    )
}

export default ShoesCarousel
