import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontGrotesque, mainViewWidth, siteFontGrotesqueMono, siteFontTiempo } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',

    marginTop: 30, 
    // height: 500, 
    width: mainViewWidth,
    marginBottom: 50, 

    // backgroundColor: 'blue'
})

export const TitleBar = styled.div({
    // marginTop: 10, 

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: 40, 
    width: '100%',

    fontSize: 24,
    letterSpacing: 1,
    fontFamily: siteFontTiempo,
    fontWeight: 600,

    // backgroundColor: 'powderblue'
})

export const CarouselContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'hover',
    animated: 'false', 

    marginTop: 20,
    width: '100%',
    height: 800,

    // border: '10px solid black'
})

export const CustomInsider = styled.div({
    height: '20%',
    width: '20%',
    zIndex: 1,
    // border: '3px solid black', 
    backgroundColor: 'blue'
})

export const CustomImg = styled.img({
    height: '100%',
    width: '100%',
})

export const CarouselWindow = styled.div({
    height: 800,
    width: '100%',

    position: 'relative',

    // border: '10px solid blue', 

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
})

export const CarouselButton = styled.div({
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',

    cursor: 'pointer', 

    height: 35, 
    width: 250,

    position: 'absolute',
    bottom: '10%', 
    right: '40%',

    fontSize: 16,
    fontFamily: siteFontGrotesqueMono,
    fontWeight: 500,
    whiteSpace: 'pre-wrap',

    backgroundColor: 'white'
})

export const SubtitleContainer = styled.div({
    marginTop: 20, 
    // height: 40, 
    width: '100%',

    fontSize: 18,
    fontFamily: siteFontTiempo,
    fontWeight: 600
})

export const BlurbContainer = styled.div({
    marginTop: 15, 
    // height: 40, 
    width: '100%',

    fontSize: 16,
    fontFamily: siteFontTiempo,
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
})

export const TempImage = primStyled.Image({
    height: '100%',
    width: '100%'
})

export const HoursContainer = styled.div({
    marginTop: 15, 
    // height: 40, 
    width: '100%',

    fontSize: 16,
    fontFamily: siteFontTiempo,
    fontWeight: 500,
    whiteSpace: 'pre-wrap',
})