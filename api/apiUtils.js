/* eslint-disable */

let serverUrl = 'http://localhost:3003'
let userId = ''

// const setHeaders = () => {
//     // do something for JSON
// }

export const setOptions = (method, data) => ({
    method, 
    body: JSON.stringify(data), 
    headers: {
        'Content-Type': 'application/json',
        // 'trashtalk-token': global.apiToken
        // userId: global.userId
    }
})

export const sendApiCall = async(options, route) => {
    const serverRoute = serverUrl + route

    // console.log(`trying ${serverRoute}`)

    try {
        const res = await fetch(serverRoute, options)
        const data = await res.json()
        if (!data.success) throw { message: 'invalid return from the api' }
        return data
    }
    catch (err) {
        console.log(`ERROR WITH ${route}`)
        console.log({err})
        return false
    }
}