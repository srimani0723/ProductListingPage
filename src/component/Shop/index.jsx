import React from 'react'
import Header from '../Header'
import { CPara, CHeading, AlignDiv, Content, FilterDiv, FilterSubDiv, FilterToggleBtn, MainDiv, ProductSubDiv, SideFilterBarDiv, SortOption, SortOptions, TotalItems } from './styledcomponent'
import Products from '../Products'
import HeaderSlice from '../../ReduxComponent/HeaderSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductsSlice from '../../ReduxComponent/ProductsSlice'
function Shop() {
    const { sideBar } = useSelector(store => store.HeaderState)
    const { productsList } = useSelector(store => store.productsState)
    const action = HeaderSlice.actions
    const action2 = ProductsSlice.actions
    const dispatch = useDispatch()

    const onToggleSideBar = () => {
        dispatch(action.toggleSideBar())
    }

    const onChangeFilter = (e) => {
        dispatch(action2.setFilterOption(e.target.value))
    }

    return (
        <MainDiv>
            <Header></Header>
            <Content>
                <CHeading>DISCOVER OUR PRODUCTS</CHeading>
                <CPara>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</CPara>
            </Content>
            <ProductSubDiv>
                <FilterDiv>
                    <FilterSubDiv>
                        <TotalItems>{productsList.length} Items</TotalItems>
                        <FilterToggleBtn onClick={onToggleSideBar}>
                            {sideBar ? `< HIDE FILTER` : `SHOW FILTER >`}
                        </FilterToggleBtn></FilterSubDiv>
                    <SortOptions onChange={onChangeFilter}>
                        <SortOption value="RECOMMENDED">
                            RECOMMENDED
                        </SortOption>
                        <SortOption value="PRICE: HIGH TO LOW">
                            PRICE: HIGH TO LOW
                        </SortOption>
                        <SortOption value="PRICE: LOW TO HIGH">
                            PRICE: LOW TO HIGH
                        </SortOption>
                    </SortOptions>
                </FilterDiv>

                <AlignDiv>
                    <SideFilterBarDiv $d={sideBar ? 'block' : 'none'}>
                    </SideFilterBarDiv>
                    <Products></Products>
                </AlignDiv>

            </ProductSubDiv>
            
        </MainDiv>
    )
}

export default Shop