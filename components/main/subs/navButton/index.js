import React, { Fragment, useState } from 'react'
import Link from 'next/link'

import { Container, CenterContainer, Logo } from './style'

const NavButton = ({ isHome, options }) => {
    const { label, path } = options

    const NavInnerButtonText = (<Container>{label}</Container>)
    const NavInnerButtonLogo = (
        <CenterContainer>
            <Logo
                source={{
                    uri: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/evolv-logo_horizontal-black.svg',
                }}
            />
        </CenterContainer>
    )

    const NavInnerButton = isHome ? NavInnerButtonLogo : NavInnerButtonText

    return (
        <Link href={path}>
            {NavInnerButton}
        </Link>
    )
}

export default NavButton
