import styled from '@emotion/styled'
import { siteFontFamily } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    position: 'relative', 
    width: '100%',
    height: 25,

    // backgroundColor: 'powderblue'
})

export const SortingBox = styled.div({
    position: 'absolute',
    right: 0,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
    
    height: '100%',
    width: 300,
    // backgroundColor: 'darkgrey',

    fontFamily: siteFontFamily,
    fontSize: 15,
    lineHeight: 1.5,
    fontWeight: 600
})

export const DropdownFilter = styled.select({
    height: '100%',
    width: 150,

    fontFamily: siteFontFamily,
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 600,

    marginLeft: 5
})

export const DropdownOption = styled.option({
    fontFamily: siteFontFamily,
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 600
})