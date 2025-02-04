import React from 'react'
import { useNavigate } from "react-router-dom";

import { Heading, Div, Image, Para, Button } from './styledcomponent'
function NotFound() {
    const navigate = useNavigate()
    const navigateShop = () => {
        navigate('/')
    }

    return (
        <>
            <Div>
                <Image src="https://img.freepik.com/premium-vector/page-found-concept-illustration_86161-98.jpg?w=900" alt='not found' />
                <Heading>Page Not Found</Heading>
                <Button onClick={navigateShop}>Back to Home</Button>
            </Div>
        </>
    )
}

export default NotFound