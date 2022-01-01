import React from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap'

import NavButton from '../subs/navButton'

import { Container, TopBar, BottomBar } from './style'

const navOptions = [
  {
    label: "Home",
    title: "Rock Climbing and Bouldering Gear",
    path: "/",
    icon: ''
  },
  {
    label: "Team Evolv",
    title: "Rock Climbing and Bouldering Gear",
    path: "/teamEvolv",
    icon: ''
  }
]

// is all this stuff even necessary, can i customize it completely for myself
export const NavigationBar = () => {
    
    return (
        <Container>
            <TopBar>
            
            </TopBar>
            <BottomBar>
                { navOptions.map( button => <NavButton options={button} />) }
            </BottomBar>
        </Container>
    )
}
{/* <Form className="form-center">
<FormControl type="text" placeholder="Search" className="" />
</Form> */}

export default NavigationBar