import styled from '@emotion/styled'

import { siteFontGrotesqueMono, siteFontGrotesque, siteFontTiempo } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',

    width: '100vw',
    height: '35vw',
    maxHeight: '35vw'

    // backgroundColor: 'powderblue'
})

export const CarouselItem = styled.div({
    width: '100vw',
    height: '35vw',
})

export const Slide = styled.div({
    display: 'flex',

    position: 'relative',

    width: '100vw',
    height: '35vw',
    maxHeight: '35vw',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
})

export const Title = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    left: '25%',
    bottom: '17%', 
    height: '7vw',
    width: '50vw', 
    // border: '3px solid white', 

    fontSize: '3vw',
    fontFamily: siteFontGrotesque,
    fontWeight: 600,
    textShadow: '1px 1px gray', 
    whiteSpace: 'pre-wrap',
    color: 'white'
})

export const ButtonLink = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    left: '44vw',
    bottom: '13%', 
    height: '2.2vw',
    width: '12vw', 
    backgroundColor: 'white', 

    cursor: 'pointer', 

    fontSize: '.75vw',
    fontFamily: siteFontTiempo,
    letterSpacing: 1,
    fontWeight: 600
})