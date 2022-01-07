import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { mainViewWidth, navBarHeight, siteFontGrotesque, siteFontGrotesqueMono, siteFontTiempo } from '../../../utils/constants'

export const BannerImage = primStyled.Image({
    display: 'flex',
    width: '100vw',
    height: 600,
    zIndex: -1,

    position: 'absolute',
    top: navBarHeight, 
    left: 0,
})

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: 450, 
    // height: 500, 
    width: mainViewWidth,

    backgroundColor: 'white'
})

export const TitleBar = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    marginTop: 30,
    width: '100%',

    fontFamily: siteFontGrotesque,
    fontSize: 60,
    lineHeight: 1.5,
    fontWeight: 900,
})

export const SubtitleBar = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    marginTop: 30,
    height: 30, 
    width: '20%',

    fontFamily: siteFontGrotesqueMono,
    fontSize: 9,
    lineHeight: 1.5,
    fontWeight: 100,
    // color: 'darkgrey',

    borderBottom: '.5px solid black',
})

export const TitleBarTwo = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', 

    marginTop: 30,
    width: '100%',

    fontFamily: siteFontGrotesque,
    fontSize: 40,
    lineHeight: 1.5,
    fontWeight: 900,

    // backgroundColor: 'powderblue'
})

export const BlurbDiv = styled.div({
    display: 'flex',

    width: '100%',
    marginTop: 40,

    fontFamily: siteFontTiempo,
    fontSize: 15,
    lineHeight: 1.5,
    fontWeight: 100,
    whiteSpace: 'pre-wrap',

    // backgroundColor: 'powderblue'
})