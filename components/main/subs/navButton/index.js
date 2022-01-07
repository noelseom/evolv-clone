import React, { Fragment, useState } from 'react'
import Link from 'next/link'

import { Container, CenterContainer, Logo, InnerA } from './style'

const NavButton = ({ isHome, options }) => {
    const { label, path } = options

    const NavInnerButtonText = (label === 'RESOLE') ? <InnerA><Container>{label}</Container></InnerA> :
        <Container>{label}</Container>
    const NavInnerButtonLogo = (
        <CenterContainer>
            <Logo
                source={{
                    uri: '/assets/logoblack.svg',
                }}
            />
        </CenterContainer>
    )

    const NavInnerButton = isHome ? NavInnerButtonLogo : NavInnerButtonText

    return (label === 'RESOLE') ? <InnerA target='_blank' href={path}><Container>{label}</Container></InnerA> :  <Link href={path}>{NavInnerButton}</Link>
}

export default NavButton
