import React from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap'

import { siteFontGrotesque, siteFontGrotesqueMono, siteFontTiempo } from '../../../utils/constants'

import NavButton from '../subs/navButton'

import { Container, TopBar, TopBarText, BottomBar, BottomBarLeft, BottomBarRight, BottomBarMid } from './style'

const navOptionsLeft = [
    {
        label: 'SHOP',
        title: 'Evolv Online Store for Climbing and Bouldering Gear',
        path: '/shop',
        icon: '',
    },
    {
        label: 'TEAM EVOLV',
        title: 'Team Evolv',
        path: '/team-evolv',
        icon: '',
    },
]

const navHome = {
    label: 'Home',
    title: 'Rock Climbing and Bouldering Gear',
    path: '/',
    icon: ''
}

const navOptionsRight = [
    {
      label: 'RESOLE',
      title: "Evolv Pro Shop | Evolv USA",
      path: "https://www.yosemitebum.com/",
      icon: ''
    },
    {
        label: 'RETAIL STORE',
        title: 'Evolv Pro Shop | Evolv USA',
        path: '/evolv-pro-shop',
        icon: '',
    },
    {
        label: 'ABOUT US',
        title: 'About Us | Evolv USA',
        path: '/about-us',
        icon: '',
    }
]

// is all this stuff even necessary, can i customize it completely for myself
export const NavigationBar = () => {
    return (
        <Container>
            <TopBar>
                <TopBarText style={{ fontFamily: siteFontGrotesqueMono }}>*****THIS IS NOT AN EVOLV SITE*****</TopBarText>
                <TopBarText style={{ fontFamily: siteFontGrotesque }}>*****THIS IS NOT AN EVOLV SITE*****</TopBarText>
                <TopBarText style={{ fontFamily: siteFontTiempo }}>*****THIS IS NOT AN EVOLV SITE*****</TopBarText>
            </TopBar>
            <BottomBar>
                <BottomBarLeft>
                    {navOptionsLeft.map((button) => (
                        <NavButton key={button.path} options={button} />
                    ))}
                </BottomBarLeft>
                <BottomBarMid>
                    <NavButton isHome={true} key={navHome.path} options={navHome} />
                </BottomBarMid>
                <BottomBarRight>
                    {navOptionsRight.map((button) => (
                        <NavButton key={button.path} options={button} />
                    ))}
                </BottomBarRight>
            </BottomBar>
        </Container>
    )
}

export default NavigationBar
