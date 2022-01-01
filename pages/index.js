import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import { Global } from '@emotion/react'
import NavigationBar from '../components/main/navbar'

import { SiteContainer } from '../mainStyle'

export const Site = () => {
    return (
        <>
            <Global 
                styles={{
                    body: {
                        margin: 0, 
                        display: 'flex',
                        overflowX: 'hidden'
                    }    
                }}
            />
            <Head>
                <title>Stuff</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <NavigationBar />
        </>
    )
}

export default Site