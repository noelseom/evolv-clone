import styled from '@emotion/styled'
import { siteFontFamily } from '../../../utils/constants'

export const Container = styled.div({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column', 

    // height: 300,
    width: '100%',

    // backgroundColor: 'powderblue'
})

export const Drawer = styled.div({
    display: 'flex',
    flexDirection: 'column',

    // height: 100,
    width: '100%',

    border: '.5px solid lightgrey'
})

export const FilterLid = styled.div({
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',

    cursor: 'pointer',

    height: 25,
    width: '100%',

    // backgroundColor: 'yellow'
})

export const FilterLidTitle = styled.div({
    display: 'flex',
    position: 'relative',
    alignItems: 'center', 

    height: '100%',
    //backgroundColor: 'forestgreen',
    marginLeft: 5,

    fontFamily: siteFontFamily,
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 600,
})

export const FilterLidOpenShut = styled.div({
    display: 'flex',
    position: 'absolute',
    alignItems: 'center', 
    right: 10,

    height: '100%',
    //backgroundColor: 'forestgreen'
})

export const FilterDrawer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    maxHeight: 200,
    width: '100%',
    // height: 100
})

export const ClickOption = styled.div({
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',

    paddingLeft: 10,

    // width: '100%',
    height: 25,
    cursor: 'pointer',

    fontFamily: siteFontFamily,
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 300,

    // backgroundColor: 'powderblue'
})

export const CheckBox = styled.input({
    height: 20,
    marginRight: 5
})