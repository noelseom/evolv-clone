import styled from '@emotion/styled'

import { fadeIn, slideLeft } from '../../../utils/animations'

import { siteFontFamily, siteFontFamilySecond, siteGreen } from '../../../utils/constants'

const leftMargin = 10

export const Container = styled.div({
    display: 'flex',
    position: 'relative', 
    flexDirection: 'column', 
    // height: 00, 
    width: 800, 

    // // transition: 'opacity 1s',
    // // animationName: fadeIn,
    // // animationDuration: '1s',

    // animationName: slideLeft,
    // animationDuration: '1s',

    borderRadius: 10,
    backgroundColor: 'white'
})

export const HeaderBar = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 50,

    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 

    fontSize: 20,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,
    color: 'white', 

    backgroundColor: 'black'
})

export const UsernameBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 5, 
    width: '100%',
    height: 35, 

    // backgroundColor: 'powderblue'
})

export const LabelText = styled.div({
    marginLeft: leftMargin,

    fontSize: 15,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,
})

export const UsernameInput = styled.input({
    marginLeft: 5, 
    height: '50%',
    width: 150
})

export const StarsBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: 30,

    // backgroundColor: 'yellow'
})

export const StarsSelect = styled.select({
    marginLeft: 8,
    height: '80%',
    width: 50,

    fontSize: 12,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,
})

export const StarsOption = styled.option({
    fontSize: 12,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,
})

export const TextSection = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    // backgroundColor: 'darkgrey'
})

export const ReviewTextArea = styled.textarea({
    margin: 10, 
    height: 200,
    width: '100%',

    fontSize: 15,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,
    resize: 'none'
})

export const SubmitBar = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%', 
})

export const SubmitButton = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 40,
    width: 100, 
    borderRadius: 5, 
    marginBottom: 10, 

    cursor: 'pointer', 

    fontSize: 15,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,

    color: 'white', 
    backgroundColor: siteGreen,

    '&:hover': {
        backgroundColor: 'forestgreen'
    },
})

