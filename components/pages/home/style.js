import styled from '@emotion/styled'

import { siteFontGrotesque, siteFontGrotesqueMono, siteFontTiempo, siteGreen } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 40, 
})

export const ShoesCarouselWindow = styled.div({
    display: 'flex',
    flexDirection: 'column', 

    height: 450, 
    width: '100%'
})

export const ShoesCarouselBannerOne = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    marginTop: 30, 
    height: 60, 
    width: '100%',

    fontSize: 23,
    fontFamily: siteFontGrotesque,
    fontWeight: 600,

    // backgroundColor: 'powderblue'
})

export const ShoesCarouselBannerTwo = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    height: 60, 
    width: '100%',

    fontSize: 18,
    fontFamily: siteFontGrotesqueMono,
    fontWeight: 600,

    // backgroundColor: 'powderblue'
})

export const ShoeTile = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    height: 300, 
    width: 300,

    backgroundColor: 'black'
})

export const ShoesCarouselBox = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    height: 325, 
    width: '100%',

    // border: '1px solid black'
    // backgroundColor: 'powderblue'
})


export const BannerTileContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 

    height: 600, 
    width: '100%', 

    // border: '1px solid black'
})

export const BannerTile = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection: 'column',

    height: '97%', 
    width: '32.5%',
    marginLeft: '.25%',
    marginRight: '.25%',  

    // border: '1px solid black',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
})

export const BannerInner = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 

    height: '30%',
    width: '100%',

    fontSize: 55,
    fontFamily: siteFontGrotesque,
    fontWeight: 600,
    textShadow: '1px 1px black', 
    whiteSpace: 'pre-wrap',
    color: 'white',

    // backgroundColor: 'yellow'
})

export const ButtonLink = styled.div({
    marginTop: 10, 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 40,
    width: 200, 
    backgroundColor: 'white', 

    cursor: 'pointer', 
    textShadow: 'none',

    fontSize: 13,
    fontFamily: siteFontTiempo,
    letterSpacing: 1,
    fontWeight: 600,
    color: 'black',

    '&:hover': {
        color: siteGreen
    }
})

export const BannerContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    marginBottom: 10,

    height: 700, 
    width: '100%', 

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center', 

    // border: '1px solid black'
})

export const BigBannerInner = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 

    // marginTop: '70%'
    marginTop: '45vh', 
    height: '20%',
    width: '40%',

    fontSize: 60,
    fontFamily: siteFontGrotesque,
    fontWeight: 600,
    textShadow: '1px 1px black', 
    whiteSpace: 'pre-wrap',
    color: 'white',

    // border: '1px solid blue'
})
