import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontGrotesque, mainViewWidth, siteFontTiempo } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: 30,
    width: mainViewWidth,

    // border: '2px solid black'
})

export const BioBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    height: 600,
    width: '100%',

    //  backgroundColor: 'blue'
})

export const ProPic = primStyled.Image({
    height: '100%',
    width: '50%'
})

export const ProName = styled.div({
    display: 'flex',
    alignItems: 'center', 

    height: 40, 
    width: '100%', 

    fontFamily: siteFontTiempo,
    fontSize: 20,
    lineHeight: 1.5,
    fontWeight: 600,
    // backgroundColor: 'green'
})

export const Bio = styled.div({
    display: 'flex',
    flexDirection: 'column',

    height: '100%',
    width: '47%',
    marginLeft: '3%',

    fontFamily: siteFontTiempo,
    fontSize: 13.5,
    lineHeight: 1.5,
    fontWeight: 100,

    whiteSpace: 'pre-wrap'
})

export const AccomplishmentsBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 20, 
    width: '100%',
    // border: '1px solid black'
})

export const AccomplishmentsWindow = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    height: '100%',
    width: 400,

    fontFamily: siteFontTiempo,
    fontSize: 13.5,
    lineHeight: 1.5,
    fontWeight: 100,

    whiteSpace: 'pre-wrap',

    // backgroundColor: 'yellow'
})

export const AccomplishmentsTitle = styled.div({
    display: 'flex',
    alignItems: 'center', 

    height: 40, 
    width: '100%', 

    fontFamily: siteFontTiempo,
    fontSize: 20,
    lineHeight: 1.5,
    fontWeight: 600,
    // backgroundColor: 'green'
})

export const Mosaic = primStyled.Image({
    marginTop: 30,
    width: '100%',
    aspectRatio: 1,

    marginBottom: 30
})