import React, { useState, useRef, useEffect } from 'react'
import {
    Container,
    FilterLid,
    Drawer,
    FilterDrawer,
    FilterLidTitle,
    FilterLidOpenShut,
    ClickOption,
    CheckBox,
} from './style'

const sizeOptions = [
    '4',
    '4.5',
    '5',
    '5.5',
    '6',
    '6.5',
    '7',
    '7.5',
    '8',
    '8.5',
    '9',
    '9.5',
    '10',
    '11',
    '12',
    '13',
]

const ShopFilter = ({ filters, filterProducts }) => {
    const [showClimbingDrawer, setShowClimbingDrawer] = useState(false)
    const [showSizeDrawer, setShowSizeDrawer] = useState(false)

    const changeClimbingDrawer = () => setShowClimbingDrawer(!showClimbingDrawer)
    const changeSizeDrawer = () => setShowSizeDrawer(!showSizeDrawer)


    //climbing, size, price
    return (
        <Container>
            <Drawer>
                <FilterLid onClick={changeClimbingDrawer}>
                    <FilterLidTitle>Climbing</FilterLidTitle>
                    <FilterLidOpenShut>{showClimbingDrawer ? '-' : '+'}</FilterLidOpenShut>
                </FilterLid>
                {showClimbingDrawer && (
                    <FilterDrawer>
                        <ClickOption onClick={(e) => filterProducts('climbingShoes')}>
                            <CheckBox readOnly checked={filters.climbingShoes} type="checkbox" />
                            Shoes
                        </ClickOption>
                        <ClickOption onClick={(e) => filterProducts('climbingAccessories')}>
                            <CheckBox readOnly checked={filters.climbingAccessories} type="checkbox" />
                            Accessories
                        </ClickOption>
                    </FilterDrawer>
                )}
            </Drawer>
            <Drawer>
                <FilterLid onClick={changeSizeDrawer}>
                    <FilterLidTitle>Size</FilterLidTitle>
                    <FilterLidOpenShut>{showSizeDrawer ? '-' : '+'}</FilterLidOpenShut>
                </FilterLid>
                {showSizeDrawer && (
                    <FilterDrawer style={{ overflowY: 'scroll' }}>
                        {sizeOptions.map((size, index) => (
                            <ClickOption key={index} onClick={(e) => filterProducts(`size_${size}`)}>
                                <CheckBox readOnly key={index} checked={filters[`size_${size}`]} type="checkbox" />
                                {size}
                            </ClickOption>
                        ))}
                    </FilterDrawer>
                )}
            </Drawer>
        </Container>
    )
}

export default ShopFilter
