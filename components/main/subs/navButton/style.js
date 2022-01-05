import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'
import { navigationMidWidth, siteFontFamily } from '../../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    width: 150,
    height: '100%',
    marginLeft: 10, 
    marginRight: 10,

    paddingTop: '7px',

    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',

    fontSize: 14,
    letterSpacing: 2,
    fontFamily: siteFontFamily,
    fontWeight: 600,

    boxSizing: 'border-box',
    borderBottom: '7px solid transparent',
    '&:hover': {
        overflow: 'hidden',
        borderBottom: '7px solid #5cdc88'
   }

    //backgroundColor: 'blue'
    //#5cdc88
})

export const CenterContainer = styled.div({
    display: 'flex',
    width: navigationMidWidth,
    height: '100%',
    marginLeft: 10, 
    marginRight: 10,

    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',
})

export const Logo = primStyled.Image({
    height: '60%',
    width: '100%',
    resizeMode: 'contain'
})