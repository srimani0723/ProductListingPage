import React from 'react'
import Header from '../Header'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { MainDiv, EmptyDiv, Heading, Image, Button, CartDiv, ItemsContainer, CartHeading, RemoveBtn, TotalBox, Span, TotalPara, CartMainDiv } from './styledcomponent'
import CartItem from '../CartItem';
import CartSlice from "../../ReduxComponent/CartSlice";
const CartView = () => {
    const navigation = useNavigate()
    const { cart, cartQuantity, totalCartPrice } = useSelector(store => store.CartState)
    const dispatch = useDispatch()

    const action = CartSlice.actions

    const GoToStore = () => {
        navigation('/shop')
    }

    const removeAll = () => {
        dispatch(action.removeAllItems())
    }

    const displayCartItems = () => {
        const len = cart.length
        return len > 0 ? (
            <>
                <CartHeading>My Cart</CartHeading>
                <ItemsContainer>
                    <RemoveBtn onClick={removeAll}>Remove All</RemoveBtn>
                    {
                        cart.map(each => <CartItem key={each.id} item={each}></CartItem>)
                    }
                </ItemsContainer>
                <TotalBox>
                    <CartHeading><Span>Order Total:</Span> {totalCartPrice}/-</CartHeading>
                    <TotalPara>{cartQuantity} Items in Cart</TotalPara>
                    <Button>Checkout</Button>
                </TotalBox>
            </>
        ) : (
            <EmptyDiv>
                <Image
                    src='https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-1172.jpg?t=st=1736610908~exp=1736614508~hmac=da27f4a113073107abba94dd2551e0cc23259b3713a7f128bf1c35143ce84aaa&w=740'
                    alt='empty view'
                />
                <Heading>No products in the Cart</Heading>
                <Button onClick={GoToStore}>Go to Store</Button>

            </EmptyDiv>
        )
    }

    return (
        <MainDiv>
            <Header></Header>
            <CartMainDiv>
                <CartDiv>
                    {displayCartItems()}
                </CartDiv>
            </CartMainDiv>
        </MainDiv>
    )
}

export default CartView
