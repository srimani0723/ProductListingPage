import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { HeartIcon } from "../../assets/assets";
import { Content, Button, Card, Cost, Div, Image, Para, Rating, Wishlist } from './styledcomponent'
import CartSlice from '../../ReduxComponent/CartSlice';
import ProductsSlice from '../../ReduxComponent/ProductsSlice';


function ProductCard(props) {
    const { item } = props
    const { image, price, rating, title, wishlist } = item

    const action = CartSlice.actions
    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(action.addItemToCart(item))
    }

    const onClickWishlist = () => {
        dispatch(ProductsSlice.actions.setWishlistProduct(item))
    }

    return (
        <Card>
            <Image src={image} alt={title} />
            <Content >
                <Para>{title.slice(0, 50)} ...</Para>
                <Div width="100%">
                    <Div>
                        <Rating>{rating.rate}</Rating>
                        <FaStar color='#FDCC0D' />
                    </Div>
                    <Cost>$. {Math.round(price)}</Cost>
                </Div>
                <Div width="100%">
                    <Button onClick={addItem}>Add to Cart</Button>
                    <Wishlist onClick={onClickWishlist}>
                        <HeartIcon width="1.5rem" fill={wishlist ? 'red' : 'white'} />
                    </Wishlist>
                </Div>
            </Content>
        </Card>
    )
}

export default ProductCard