import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { MdDeleteOutline } from "react-icons/md";

import { ItemDiv, Item, ItemImg, ItemName, DeleteBtn, Price, Quantity, ContentDiv, QuantityDiv, QuantityBtn } from './styledcomponent'
import CartSlice from '../../ReduxComponent/CartSlice';

function CartItem(props) {
    const dispatch = useDispatch()
    const action = CartSlice.actions
    const { item } = props
    const { image, id, price, quantity, title } = item

    const onIncrement = () => {
        dispatch(action.addItemToCart(item))
    }

    const onDecrement = () => {
        dispatch(action.removeEachItemFromCart(item))
    }

    const onClickRemoveItem = () => {
        dispatch(action.removeItemFromCart(item))
    }


    const totalCost = quantity * Math.round(price);


    return (
        <Item>
            <ItemDiv>
                <ItemImg src={image} alt={id} />
                <ItemName>{title}</ItemName>
            </ItemDiv>
            <ContentDiv>
                <Price>$. {totalCost}/-</Price>
                <QuantityDiv>
                    <QuantityBtn onClick={onDecrement}>
                        <FaMinus />
                    </QuantityBtn>
                    <Quantity>{quantity}</Quantity>
                    <QuantityBtn onClick={onIncrement}>
                        <FaPlus />
                    </QuantityBtn>
                </QuantityDiv>
            </ContentDiv>
            <DeleteBtn onClick={onClickRemoveItem}>
                <MdDeleteOutline />
            </DeleteBtn>

        </Item>
    )
}

export default CartItem
