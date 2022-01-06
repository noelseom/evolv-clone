import styled from '@emotion/styled'
import { mainViewWidth } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: mainViewWidth,
    //height: 1500, 

    // backgroundColor: 'powderblue'
})

export const DetailTwoLine = styled.div({
    height: 5,
    width: 200, 
    borderBottom: '.5px solid black',
    marginTop: 20,
    marginBottom: 10
})