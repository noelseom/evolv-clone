import React, { useState, Fragment } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavigationBar from '../components/main/navbar'

const Site = () => {

    return (
        <>
            <Router>
                <NavigationBar />
            </Router>
        </>
    )
}

export default Site