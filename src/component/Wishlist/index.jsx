import React from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import ProductSlice from "../../ReduxComponent/ProductsSlice";
import EmptyView from "../EmptyView";
import ProductCard from '../ProductCard'
import { WishlistBox, MainDiv, Heading, WishlistListDiv, Div, Button } from './styledcomponent'

function Wishlist() {
    const navigate = useNavigate()
    const { productsList } = useSelector(store => { return store.productsState })
    const action = ProductSlice.actions
    const dispatch = useDispatch()
    const wishlistList = productsList.filter(each => each.wishlist === true)
    console.log(wishlistList)


    const displayCards = () => {
        const cardsExist = wishlistList.length > 0

        return (cardsExist) ?
            (
                <WishlistListDiv>
                    {wishlistList.map(each => (
                        <ProductCard key={each.id} item={each} />
                    ))}
                </WishlistListDiv>
            ) : (

                <EmptyView />


            )
    }

    return (
        <MainDiv>
            <Header></Header>
            <WishlistBox>
                <Div>
                    <Heading>Wishlist</Heading>
                    {displayCards()}
                </Div>
            </WishlistBox>
        </MainDiv>
    )
}

export default Wishlist
