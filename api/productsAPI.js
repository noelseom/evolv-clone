import { setOptions, sendApiCall } from './apiUtils'

export const _getProducts = async() => sendApiCall(setOptions('GET'), '/products')
export const _getProductDetails = async(productUid) => sendApiCall(setOptions('GET'), `/products/${productUid}`)
export const _getRelatedProducts = async() => sendApiCall(setOptions('GET'), '/relatedProducts')

export const _reviewProduct = async(data) => sendApiCall(setOptions('POST', data), '/products/reviews')
export const _getProductReviews = async(productUid) => sendApiCall(setOptions('GET'), `/products/${productUid}/reviews`)
