import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontFamily, siteFontFamilySecond, siteGreen, siteBlue, siteFontGrotesque, siteFontTiempo, siteFontGrotesqueMono } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
    height: 700,
    // border: '.5px solid black'
})

export const ImageWindow = styled.div({
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
    justifyContent: 'center',

    height: '100%',
    width: '55%',

    // backgroundColor: 'yellow'
})

export const ProductImage = primStyled.Image({
    width: '80%',
    aspectRatio: 1
})

export const WindowRight = styled.div({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',

    height: '100%',
    width: '45%'
})

export const TitleBar = styled.div({
    display: 'flex',

    marginTop: 40,
    width: '100%',

    fontSize: 28,
    letterSpacing: 1.5,
    // fontFamily: siteFontGrotesque,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600
})

export const ReviewBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',

    width: '100%',
    height: 30,

    fontSize: 14,
    letterSpacing: 1.5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,

    // backgroundColor: 'yellow'
})

export const WriteReviewSection = styled.div({
    position: 'absolute', 
    right: 30,
    display: 'flex',
    height: '100%',
    alignItems: 'center',

    cursor: 'pointer'
})

export const ProductIdBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: 10,

    fontSize: 10,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,

    // backgroundColor: 'yellow'
})

export const DeliveryBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10, 
    width: '100%',
    height: 30,

    fontSize: 13,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,

    // backgroundColor: 'yellow'
})

export const ColoredCircle = styled.div({
    display: 'flex',
    height: 10, 
    width: 10, 
    backgroundColor: 'green',
    marginRight: 10,

    borderRadius: '50%'
})

export const ProductColorCircle = styled.div({
    display: 'flex',
    height: 23, 
    width: 23, 
    backgroundColor: 'green',
    marginRight: 10,

    cursor: 'pointer',

    '&:hover': {
        boxShadow: 'inset 0 0 0 3px white',
        border: '.5px solid black'
    },

    borderRadius: '50%'
})

export const CostBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: 50,

    fontSize: 24,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 800
})

export const MinorDescriptionBar = styled.div({
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
    maxHeight: 100,
    // overflowY: 'scroll',

    fontSize: 14,
    lineHeight:1.5,
    letterSpacing: .5,
    fontFamily: siteFontFamily,
    fontWeight: 100
})

export const ColorBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: 70,

    // backgroundColor: 'yellow'
})

export const BottomRight = styled.div({    
    position: 'absolute', 

    display: 'flex',
    flexDirection: 'column',

    width: '100%',
})

export const SizeQuantityBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: 25,

    fontSize: 13,
    lineHeight: 1.5,
    letterSpacing: .5,
    fontFamily: siteFontFamily,
    fontWeight: 100,
})

export const SizeQuantitySelect = styled.select({
    height: '100%',
    width: 150,

    fontFamily: siteFontFamilySecond,
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 600,

    marginLeft: 10,
    marginRight: 20,
})

export const SizeQuantityOption = styled.option({
    fontFamily: siteFontFamily,
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 600
})

export const PurchaseBar = styled.div({
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'end',

    width: '100%',
    marginTop: 15, 

    // backgroundColor: 'yellow'
})

export const AddToCartButton = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 

    borderRadius: 5,
    backgroundColor: siteGreen, 
    color: 'white',

    fontFamily: siteFontFamilySecond,
    fontSize: 20,
    lineHeight: 1.5,
    fontWeight: 100,

    cursor: 'pointer',

    '&:hover': {
        backgroundColor: 'forestgreen'
    },

    // width: '100%',
    height: 60
})

export const ViewDetailsButton = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 

    borderRadius: 5,
    backgroundColor: 'white', 
    color: 'black',

    marginTop: 10,
    fontFamily: siteFontFamilySecond,
    fontSize: 20,
    lineHeight: 1.5,
    fontWeight: 100,

    cursor: 'pointer',

    '&:hover': {
        backgroundColor: 'black',
        color: 'white'
    },

    boxShadow: 'inset 0 0 0 2px black',

    // width: '100%',
    height: 60,
    marginBottom: 20
})

export const PayPalButton = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 

    borderRadius: 5,
    backgroundColor: siteBlue, 
    color: 'white',

    fontFamily: siteFontFamilySecond,
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 100,

    cursor: 'pointer',

    '&:hover': {
        backgroundColor: 'darkturquoise'
    },

    marginTop: 10, 
    width: '50%',
    height: 40
})

export const FreeReturnsBar = styled.div({
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'end',

    width: '100%',
    height: 20, 
    marginTop: 10,

    fontFamily: siteFontFamily,
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 100,
})

export const RememberWindow = styled.div({
    position: 'absolute',
    left: 0,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    height: '100%'
})

export const BottomIcon = primStyled.Image({
    height: '80%', 
    marginRight: 5, 
    aspectRatio: 1
})


// purchase bar
// remember bar
