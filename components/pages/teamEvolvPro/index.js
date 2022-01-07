import React, { useState, useEffect } from 'react'
import { SiteContainer } from '../../../mainStyle'
import { BioBar, Container, ProPic, Bio, ProName, Mosaic, AccomplishmentsBar, AccomplishmentsWindow, AccomplishmentsTitle } from './style'

import { genericProPic, pros } from '../../../utils/constants'
import { accomplishmentsBlurb, proBlurb } from '../../../utils/blurbConstants'

const TeamEvolvPro = () => {
    const [pro, setPro] = useState({})

    useEffect(() => {
        let path = window.location.href
        let proId = path.split('?')[1].split('=')[1]

        const pro = pros[proId-1]

        console.log({ pro })
        setPro({...pro})
    }, [])

    return (
        <SiteContainer>
            <Container>
                <BioBar>
                    <ProPic source={{ uri: pro.imageUrl }} />
                    <Bio>
                        <ProName>
                            {pro.name}
                        </ProName>
                        {proBlurb}
                    </Bio>
                </BioBar>
                <AccomplishmentsBar>
                    <AccomplishmentsWindow>
                        <AccomplishmentsTitle>
                            ACCOMPLISHMENTS 
                        </AccomplishmentsTitle>
                        {accomplishmentsBlurb}
                    </AccomplishmentsWindow>
                </AccomplishmentsBar>
                <Mosaic source={{uri: genericProPic}} />
            </Container>
        </SiteContainer>
    )
}

export default TeamEvolvPro