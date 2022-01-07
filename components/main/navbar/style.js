import styled from '@emotion/styled'
import { navigationMidWidth, navBarHeight } from '../../../utils/constants'

export const Container = styled.div({
    zIndex: 10,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',

    width: '100vw',
    height: navBarHeight
    //backgroundColor: 'blue'
})

export const TopBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 

    width: '100%',
    height: '40%',
    backgroundColor: 'black'
})

export const TopBarText = styled.div({
    fontSize: 15,
    // fontFamily: siteFontGrotesque,
    // fontWeight: 600,
    color: 'white',

    marginLeft: 10, 
    marginRight: 10
})

export const BottomBar = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '60%',

    //paddingLeft: '15%',
    backgroundColor: 'white',
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