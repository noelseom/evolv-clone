import React, { Fragment } from 'react'
import { SiteContainer } from '../../../mainStyle'
import { Container, AboutImage } from './style'

const About = () => {
    return (
        <SiteContainer>
            <Container>
                <AboutImage source={{ uri: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/evolv0.png' }} style={{ height: 300}} />
                <AboutImage source={{ uri: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/evolv1.png' }} style={{ height: 600}} />
                <AboutImage source={{ uri: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/evolv2.png' }} style={{ height: 500}} />
                <AboutImage source={{ uri: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/evolv3.png' }} style={{ height: 700}} />
                <AboutImage source={{ uri: 'https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/evolv4.png' }} style={{ height: 600}} />

            </Container>
        </SiteContainer>
    )
}

export default About