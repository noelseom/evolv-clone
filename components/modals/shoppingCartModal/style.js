import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { slideLeft } from '../../../utils/animations'

import { siteFontFamily, siteFontFamilySecond, siteGreen, navBarHeight } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column', 

    // marginTop: navBarHeight,
    height: '100%', 
    width: 700,

    position: 'fixed', 
    top: 0, 
    right: 0,

    animationName: slideLeft,
    animationDuration: '.5s',

    backgroundColor: 'white'
})

export const AddedBanner = styled.div({
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center', 

    marginTop: 20, 

    height: 60, 
    width: '100%',

    fontFamily: siteFontFamily,
    fontSize: 15,
    letterSpacing: .5,
    lineHeight: 1.5,
    fontWeight: 500,

    backgroundColor: 'lightgrey'
})

export const HeaderBar = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    fontFamily: siteFontFamily,
    fontSize: 23,
    letterSpacing: 1.5,
    lineHeight: 1.5,
    fontWeight: 500,
    color: 'white',

    height: 60, 
    width: '100%',

    backgroundColor: 'black'
})

export const CartBar = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 

    marginTop: 20, 
    maxHeight: 1000, 
    overflowY: 'auto', 
    width: '100%',

    // border: '1px solid black'
})

export const CartItem = styled.div({
    display: 'flex',
    position: 'relative', 
    flexDirection: 'row',
    alignItems: 'center', 

    
    marginBottom: 10,
    height: 100, 
    width: '100%',

    borderBottom: '1px solid lightgray',
    // backgroundColor: 'powderblue'
})

export const CartImage = primStyled.Image({
    height: '100%',
    aspectRatio: 1, 
    marginLeft: 20,

})

export const CartItemDetails = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    height: '80%',
    marginLeft: 20, 
    // width: 400, 

    // backgroundColor: 'yellow'
})

export const CartItemDetailsTop = styled.div({
    display: 'flex',
    alignItems: 'center',

    fontFamily: siteFontFamilySecond,
    fontSize: 17,
    lineHeight: 1.5,
    fontWeight: 500,

    // backgroundColor: 'lightgreen'
})

export const CartItemDetailsBottom = styled.div({
    fontFamily: siteFontFamilySecond,
    fontSize: 19,
    lineHeight: 1.5,
    fontWeight: 600,
})

export const DeleteButton = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    position: 'absolute',
    right: 50, 
    top: '40%',

    height: 20, 
    width: 20, 

    cursor: 'pointer', 

    fontFamily: siteFontFamily,
    fontSize: 19,
    lineHeight: 1.5,
    fontWeight: 600,

    // backgroundColor: 'powderblue'
})

export const SubTotalBar = styled.div({
    display: 'flex',
    alignItems: 'center',
    position: 'relative', 

    height: 50,
    width: '100%',

    fontFamily: siteFontFamilySecond,
    fontSize: 17,
    lineHeight: 1.5,
    fontWeight: 500,

    // backgroundColor: 'powderblue'
})

export const SubTotalText = styled.div({
    marginLeft: 20, 

    fontFamily: siteFontFamilySecond,
    fontSize: 19,
    lineHeight: 1.5,
    letterSpacing: 1,
    fontWeight: '500',
})

export const CostWindow = styled.div({
    display: 'flex',
    alignItems: 'center',

    position: 'absolute', 
    top: '20%',
    right: 20,

    fontFamily: siteFontFamilySecond,
    fontSize: 19,
    lineHeight: 1.5,
    letterSpacing: 1,
    fontWeight: '500'
})

export const CheckoutBar = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: 20, 
    // height: 300, 
    width: '100%', 

    // border: '1px solid black'
})

export const CheckoutButton = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: 60, 
    width: '95%',

    cursor: 'pointer', 

    fontFamily: siteFontFamilySecond,
    fontSize: 19,
    lineHeight: 1.5,
    letterSpacing: 1,
    fontWeight: '500',
    color: 'white',

    backgroundColor: siteGreen,

    '&:hover': {
        backgroundColor: 'forestgreen'
    },
})

export const ViewCartButton = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20, 
    height: 60, 
    width: '95%',

    cursor: 'pointer', 

    fontFamily: siteFontFamilySecond,
    fontSize: 19,
    lineHeight: 1.5,
    letterSpacing: 1,
    fontWeight: '500',
    color: 'black',

    boxShadow: 'inset 0 0 0 2px black',

    backgroundColor: 'white',

    '&:hover': {
        backgroundColor: 'black',
        color: 'white'
    },
})