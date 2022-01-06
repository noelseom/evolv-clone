import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontFamily, siteGreen } from '../../../utils/constants'
import { fadeIn } from '../../../utils/animations'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column', 
    position: 'relative', 

    height: 400,
    width: '30%',
    margin: '1.5%',

    transition: 'opacity 1s',
    animationName: fadeIn,
    animationDuration: '.5s',

    cursor: 'pointer',

    // border: '1px solid'
})

export const ProductImage = styled.div({
    display: 'flex',
    position: 'relative',

    width: '100%',
    height: '80%',
    backgroundSize: 'contain',
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center'
})

export const HeartImage = styled.div({
    position: 'absolute',
    top: 10, 
    right: 10,

    width: 25, 
    height: 25,
    backgroundSize: 'contain'
})

export const ProductName = styled.div({
    position: 'absolute',
    top: '78%',
    width: '100%',

    textAlign: 'center',
    // backgroundColor: 'powderblue',

    fontFamily: 'Roboto Condensed',
    fontSize: 17,
    lineHeight: 1.5,
    letterSpacing: 1,
    fontWeight: 600
})

export const ProductCost = styled.div({
    position: 'absolute',
    top: 10, 
    left: 10,

    fontFamily: 'Roboto Condensed',
    fontSize: 14,
    lineHeight: 1.5,
    letterSpacing: .5,
    fontWeight: 600
})

export const QuickViewBox = styled.div({
    position: 'absolute',
    top: '40%',

    height: 40,
    width: '100%',

    display: 'flex',
    justifyContent: 'center',

    // backgroundColor: 'powderblue'
})

export const QuickView = styled.div({
    width: '50%',
    height: '100%',
    //textAlign: 'center',
    display: 'flex', 
    justifyContent:'center',
    alignItems: 'center', 
    backgroundColor: 'black',
    color: 'white',

    fontFamily: siteFontFamily,
    fontSize: 17,
    letterSpacing: 1.5,
    lineHeight: 1.5,
    fontWeight: 300
})