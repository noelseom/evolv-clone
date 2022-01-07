import styled from '@emotion/styled'
import primStyled from '@emotion/primitives'

import { mainViewWidth } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    marginTop: 10, 
    // height: 500, 
    width: 1000,
    marginBottom: 50

    // backgroundColor: 'blue'
})

export const AboutImage = primStyled.Image({
    marginTop: 10,
    width: '100%'
})