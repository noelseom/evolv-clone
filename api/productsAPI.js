import { setOptions, sendApiCall } from './apiUtils'

export const _getProducts = async() => sendApiCall(setOptions('GET'), '/products')
