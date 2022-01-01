import styled from '@emotion/styled'

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',

    width: '100vw',
    height: 120
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

    width: '100%',
    height: '60%',

    paddingLeft: '15%',

    backgroundColor: 'powderblue'
})