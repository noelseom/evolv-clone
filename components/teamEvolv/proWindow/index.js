import React from 'react'
import ProTile from '../proTile'

import { pros } from '../../../utils/constants'

import { Container } from './style'

const ProWindow = () => {

    return <Container>
        {pros.map((pro, index) => <ProTile key={index} pro={pro} />)}
    </Container>
}

export default ProWindow