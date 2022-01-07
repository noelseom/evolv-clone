import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontGrotesque, siteFontGrotesqueMono, siteFontTiempo } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column', 

    cursor: 'pointer', 

    height: 400, 
    width: '30%',
    margin: '1.5%',

    // backgroundColor: 'powderblue',
    textDecorationLine: 'none',

    '&:hover' : {
        textDecorationLine: 'underline'
    }
})

export const ProImage = primStyled.Image({
    width: '100%',
    aspectRatio: 1
})

export const ProName = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 10,
    width: '100%',

    fontFamily: siteFontGrotesque,
    fontSize: 20,
    lineHeight: 1.5,
    fontWeight: 100
})