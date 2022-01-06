import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

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

export const ReviewQuestionTitle = styled.div({
    display: 'flex',
    flexDirection: 'column',

    width: '100%',

    fontSize: 30,
    letterSpacing: 1.5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600,
    
    marginBottom: 5,
    // backgroundColor: 'yellow'
})

export const ReviewQuestionBottom = styled.div({
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    marginTop: 10,

    cursor: 'pointer', 

    fontSize: 16,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 500,
    
    // backgroundColor: 'powderblue'
})

export const ReviewCard = styled.div({
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    // height: 150, 
    marginBottom: 20,

    // border: '.5px solid black'
    // backgroundColor: 'powderblue'
})

export const ReviewCardHeader = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: 20, 
    marginBottom: 5,

    // backgroundColor: 'powderblue'
})

export const StarImage = primStyled.Image({
    height: '80%',
    aspectRatio: 1,
    marginRight: 1
})

export const ReviewName = styled.div({
    display: 'flex',
    marginLeft: 5,

    fontSize: 16    ,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 600
})

export const ReviewText = styled.div({
    fontSize: 15,
    letterSpacing: .5,
    fontFamily: siteFontFamilySecond,
    fontWeight: 500
})
