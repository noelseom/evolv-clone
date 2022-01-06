import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontFamily, siteFontFamilySecond, siteGreen } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    width: '100%'
})

export const RelatedItemsTitle = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: 40,
    letterSpacing: 1.5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,
})

export const RelatedItemsBody = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    // height: 400,
    // backgroundColor: 'powderblue'
})

export const RelatedProductTileContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',

    height: 300,
    width: 250,
    margin: 15,

    cursor: 'pointer', 

    color: 'black', 
    '&:hover': {
        color: siteGreen
    },

    // backgroundColor: 'yellow'
})

export const ProductImage = primStyled.Image({
    width: '100%',
    aspectRatio: 1, 
    resizeMode: 'contain'
})

export const ProductName = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: 15,
    letterSpacing: 1,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600
})