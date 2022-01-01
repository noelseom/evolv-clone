import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import { Global } from '@emotion/react'
import NavigationBar from '../components/main/navbar'

const MyApp = ({ Component, pageProps, auth }) => {
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
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
