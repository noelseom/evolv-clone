import styled from '@emotion/styled'
import { navigationMidWidth } from '../../../utils/contants'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',

    width: '100vw',
    height: 89
    //backgroundColor: 'blue'
})

export const TopBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: '40%',
    backgroundColor: 'black'
})

export const BottomBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '60%',

    //paddingLeft: '15%',

    borderBottom: '1px solid gray'
})

export const BottomBarMid = styled.div({
    display: 'flex',
    height: '100%',
    width: navigationMidWidth,
    alignItems: 'center',
    justifyContent: 'center',

})

export const BottomBarLeft = styled.div({
    display: 'flex',
    width: '43%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'right',
    padding: 0,
    margin: 0,
    //border: '1px solid gray'
})

export const BottomBarRight = styled.div({
    display: 'flex',
    width: '43%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'left',
    // border: '1px solid gray'
})