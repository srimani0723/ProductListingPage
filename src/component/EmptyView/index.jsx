import React from 'react'
import { FailureDiv, Heading, Image, Para } from './styledcomponent'

function EmptyView() {

    return (
        <>
            <FailureDiv>
                <Image
                    src='https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-1172.jpg?t=st=1736610908~exp=1736614508~hmac=da27f4a113073107abba94dd2551e0cc23259b3713a7f128bf1c35143ce84aaa&w=740'
                    alt='empty view'
                />
                <Heading>No products Found</Heading>
                <Para>
                    We could not find any products. Try Again or Try other filters.
                </Para>
            </FailureDiv>
        </>
    )
}

export default EmptyView
