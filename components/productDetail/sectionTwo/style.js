import styled from '@emotion/styled'

import { siteFontFamily, siteFontFamilySecond } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 20,
    width: '100%',
    // height: 700,
    // border: '.5px solid black'
})

export const DetailsNavBar = styled.div({
    display: 'flex',
    flexDirection: 'row',

    height: 100,
    width: '100%'
})

export const DetailsNavButton = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 

    height: '100%',
    width: '33%',

    fontSize: 30,
    letterSpacing: 1.5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,
    color: 'lightgrey',

    '&:hover': {
        color: 'black'
    },

    cursor: 'pointer'
})

export const NavContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
})

export const PaymentContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',

    width: '100%',

    fontSize: 15,
    letterSpacing: 1,
    fontFamily: siteFontFamilySecond,
    fontWeight: 400,
    whiteSpace: 'pre'
})

export const DescriptionBox = styled.div({
    
    width: '100%',

    fontSize: 15,
    letterSpacing: .5,
    fontFamily: siteFontFamily,
    fontWeight: 400,

    // backgroundColor: 'powderblue'
})

export const DescriptionBottom = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30, 

    width: '100%'
})

export const DescriptionBottomTitle = styled.div({
    display: 'flex',
    marginBottom: 5,

    fontSize: 17,
    letterSpacing: 1,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,

    width: '100%'
})

export const DescriptionFeatures = styled.div({
    display: 'flex',
    flexDirection: 'column',

    fontSize: 15,
    letterSpacing: 1,
    fontFamily: siteFontFamilySecond,
    fontWeight: 400,
    whiteSpace: 'pre',

    width: '50%',
    // backgroundColor: 'darkgrey'
})

export const DescriptionSpecifications = styled.div({
    display: 'flex',
    flexDirection: 'column',

    fontSize: 15,
    letterSpacing: 1,
    fontFamily: siteFontFamilySecond,
    fontWeight: 400,
    whiteSpace: 'pre',

    width: '50%'
})

export const ShippingTitle = styled.div({
    display: 'flex',
    // justifyContent: 'center',

    width: '100%',
    marginBottom: 10, 

    fontSize: 20,
    letterSpacing: 1,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600
})

export const ShippingBottom = styled.div({
    display: 'flex',
    width: '100%',

    fontSize: 15,
    letterSpacing: 1,
    fontFamily: siteFontFamilySecond,
    fontWeight: 400,
    whiteSpace: 'pre'
})