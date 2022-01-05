import styled from '@emotion/styled'
import {
    topSiteContainerMargin,
    mainViewWidth,
    standardMargin,
    siteFontFamily
} from '../../../utils/constants'

const filterBoxWidth = 250
const productTableWidth = mainViewWidth - filterBoxWidth

export const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: mainViewWidth,
    marginTop: topSiteContainerMargin,
    justifyContent: 'center',
    // border: '2px solid blue'
})

export const Blurb = styled.div({
    width: '100%',

    fontFamily: siteFontFamily,
    lineHeight: 1.5,
    fontWeight: 500,
})

export const ShopWindow = styled.div({
    display: 'flex',
    width: '100%',
    //height: 600,
    marginTop: standardMargin, 

    // backgroundColor: 'powderblue'
})

// temporary 
export const FilterBoxContainer = styled.div({
    display: 'flex',
    // flexDirection: 'row',
    width: filterBoxWidth,
    height: 400,
    backgroundColor: 'darkgrey'
})

export const ResultsCount = styled.div({
    display: 'flex',
    width: '100%',
    
    alignSelf: 'end',
    justifyContent: 'end',

    fontFamily: siteFontFamily,
    fontSize: 13,
    lineHeight: 1.5,
    fontWeight: 500,

    backgroundColor: 'yellow',
})

export const ProductView = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: productTableWidth
})

export const ProductTable = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',

    width: '100%'
})