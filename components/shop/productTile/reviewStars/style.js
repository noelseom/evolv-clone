import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontFamily } from '../../../../utils/constants'

export const Container = styled.div({
    position: 'absolute',
    top: '85%',
    
    // width: '100%',
    marginLeft: '35%',
    height: 30, 

    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',

    fontFamily: 'Cousine',
    fontSize: 15,
    fontWeight: 600
})

export const StarImage = primStyled.Image({
    height: '60%',
    aspectRatio: 1,
    marginRight: '2%'
})

export const ReviewCountDiv = styled.div({
    position: 'absolute', 
    right: 80,

    fontFamily: 'Cousine',
    fontSize: 15,
    fontWeight: 600
})