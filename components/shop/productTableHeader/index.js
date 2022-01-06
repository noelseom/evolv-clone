import React from 'react'
import { Container, DropdownFilter, DropdownOption, SortingBox } from './style'

const dropDownOptions = [
    {
        value: 0, 
        text: 'Release Date'
    },
    {
        value: 1, 
        text: 'Maximum Price'
    },
    {
        value: 2, 
        text: 'Minimum Price'
    },
    {
        value: 3, 
        text: 'Product Name'
    },
    {
        value: 4, 
        text: 'Popularity'
    }
]

const ProductTableHeader = ({ sortProducts }) => {

    const dropdownChanged = ({ target }) => sortProducts(parseInt(target.value))

    return (
        <Container>
            <SortingBox>
                Sorting: 
                <DropdownFilter onChange={dropdownChanged}>
                    {dropDownOptions.map((selectOption, index) => (
                        <DropdownOption key={index} value={selectOption.value}>
                            {selectOption.text}
                        </DropdownOption>
                    ))}
                </DropdownFilter>
            </SortingBox>      
        </Container>
    )
}

export default ProductTableHeader
