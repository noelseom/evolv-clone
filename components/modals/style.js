import styled from '@emotion/styled'

export const ModalOverlay = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 3,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5);',

    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
})