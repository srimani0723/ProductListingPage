import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from "../Header";

import { MainDiv, Image, Button, Heading, HomeDiv, Para, ProductsSection, TopInfo } from './styledcomponent'

function Home() {
    const navigate = useNavigate()
    const navigateShop = () => {
        navigate('/shop')
    }

    return (
        <MainDiv>
            <Header></Header>
            <HomeDiv>

                <TopInfo>
                    <Heading>DISCOVER OUR PRODUCTS</Heading>
                    <Image src="https://img.freepik.com/premium-photo/man-wearing-trendy-high-quality-thick-checked-double-pocketed-clothing-fashion-photography_758367-129131.jpg?ga=GA1.1.359492572.1731914171&semt=ais_hybrid"
                        alt="fashion"
                        d="none"
                        ds="block"
                    />
                    <Para>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</Para>
                    <Button onClick={navigateShop}>Shop Now</Button>
                </TopInfo>
                <Image ds="none" src="https://img.freepik.com/premium-photo/man-wearing-trendy-high-quality-thick-checked-double-pocketed-clothing-fashion-photography_758367-129131.jpg?ga=GA1.1.359492572.1731914171&semt=ais_hybrid" alt="fashion" />

            </HomeDiv>
        </MainDiv>
    )
}

export default Home