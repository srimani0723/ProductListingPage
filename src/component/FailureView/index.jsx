import React from 'react'
import { useNavigate } from "react-router-dom";
import { MainDiv, Button, FailureDiv, Heading, Image } from './styledcomponent'

function FailureView() {
    const navigate = useNavigate()
    const Retry = () => {
        navigate('/')
    }

    return (
        <MainDiv>
            <FailureDiv>
                <Image
                    src='https://img.freepik.com/premium-vector/404-great-design-any-purposes-flat-style-people-internet-network_123447-4010.jpg?w=900'
                    alt='failure view'
                />
                <Heading>Something Went Wrong</Heading>
                <Button onClick={Retry}>Return</Button>
            </FailureDiv>
        </MainDiv>
    )
}

export default FailureView
