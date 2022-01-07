import React, { Fragment, useState } from 'react'
import Head from 'next/head'
import { Global } from '@emotion/react'
import NavigationBar from '../components/main/navbar'
import '../global.css'
import 'bootstrap/dist/css/bootstrap.css'

const MyApp = ({ Component, pageProps, auth }) => {
    return (
        <>
            <Global
                styles={{
                    body: {
                        margin: 0,
                        display: 'flex',
                        overflowX: 'hidden',
                    },
                }}
            />
            <Head>
                <title>Stuff</title>
                <link
                    rel="preload"
                    href="/fonts/GrotesqueBoldPro/basis-grotesque-bold-pro.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TiempoRegular/TiemposText-Regular.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/GrotesqueMono/basis-grotesque-mono-regular.otf"
                    as="font"
                    crossOrigin=""
                />
                <link rel="icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css?family=Tangerine|Roboto+Condensed|PT+Sans|Cousine"
                    rel="stylesheet"
                />
            </Head>

            <NavigationBar />
            <Component {...pageProps} />
            <div id="modal-root"></div>
        </>
    )
}

export default MyApp
