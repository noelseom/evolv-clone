import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { siteFontFamily } from '../../../../utils/constants'

export const Container = styled.div({
    position: 'absolute',
    top: '85%',
    
    width: '100%',
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