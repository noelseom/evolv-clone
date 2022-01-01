import React, { Fragment, useState } from 'react'
import Link from 'next/link'

import { Container } from './style'

const NavButton = ({ options }) => {
    const { label, path } = options
    
    return (
        <Link href={path}>
            <Container>
                {label}
            </Container>
        </Link>
    )
}

export default NavButton