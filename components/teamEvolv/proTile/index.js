import React from 'react'
import Router from 'next/router'

import { Container, ProImage, ProName } from './style'

const ProTile = ( {pro} ) => {
    const { id, name, imageUrl } = pro

    const gotoProPage = () => {
        Router.push({
            pathname: `/team-evolv/pro`,
            query: { proId: id },
        })
    }

    return <Container onClick={gotoProPage}>
        <ProImage source={{ uri: imageUrl}} />
        <ProName>{name}</ProName>
    </Container>
}

export default ProTile