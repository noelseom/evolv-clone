import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontGrotesque } from '../../../utils/constants'

import { fadeIn } from '../../../utils/animations'

export const Container = styled.div({
    display:'flex',
    flexDrection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'relative',

    height: 260, 
    width: 1200, 
    overflowX: 'hidden',
    // border: '1px solid black'
})

export const ArrowContainerLeft = styled.div({
    display:'flex',
    justifyContent: 'end',

    position: 'absolute',
    left: 0,
    zIndex: 3, 

    height: '100%',
    width: 200,
    backgroundColor: 'white',
    // opacity: '.8'
})

export const Arrow = primStyled.Image({
    height: 20, 
    width: 20
})

export const ArrowBox = styled.div({
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center', 

    cursor: 'pointer', 

    height: '100%',
    width: '35%',

    // backgroundColor: 'powderblue'
})

export const ArrowContainerRight = styled.div({
    display:'flex',
    justifyContent: 'start',

    position: 'absolute',
    right: 0,

    height: '100%',
    width: 200,
    backgroundColor: 'white',
    // opacity: '.8'
})

export const TileContainer = styled.div({
    display:'flex',
    flexDrection: 'row',
    alignItems: 'center', 

    height: 250, 
    width: 1200, 
    overflowX: 'hidden',

    // backgroundColor: 'yellow'
})

export const Tile = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 

    height: '90%',
    width: 200,
    marginLeft: 10,

    cursor: 'pointer', 

    transition: 'opacity 1s',
    animationName: fadeIn,
    animationDuration: '.5s',

    fontSize: 15,
    fontFamily: siteFontGrotesque,
    fontWeight: 600, 

    // border: '1px solid black'
})

export const ShoeImage = primStyled.Image({
    width: '100%',
    aspectRatio: 1
})  
