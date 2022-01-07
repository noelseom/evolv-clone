import React, { Fragment } from 'react'

import ProWindow from '../../../components/teamEvolv/proWindow'

import { SiteContainer } from '../../../mainStyle'
import { BannerImage, BlurbDiv, Container, SubtitleBar, TitleBar, TitleBarTwo } from './style'
import { teamEvolvBlurb } from '../../../utils/blurbConstants'

const bannerImageUrl = `https://evolv-clone-assets.s3.us-east-2.amazonaws.com/images/pic7.png`

const TeamEvolv = () => {
    return (
        <SiteContainer>
            <BannerImage source={{ uri: bannerImageUrl}} />
            <Container>
                <TitleBar>ELITE TEAM</TitleBar>
                <SubtitleBar>JOIN THE REVOLUTION</SubtitleBar>
                <TitleBarTwo>#TEAMEVOLV</TitleBarTwo>
                <BlurbDiv>{teamEvolvBlurb}</BlurbDiv>
                <ProWindow />
            </Container>
        </SiteContainer>
    )
}

export default TeamEvolv