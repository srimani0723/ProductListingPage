import React from 'react'
import { ThreeDots } from "react-loader-spinner";
import { FailureDiv, Heading, Image, Para } from './styledcomponent'

function LoadingView() {

    return (
        <>
            <FailureDiv>
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#24a0ed"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </FailureDiv>
        </>
    )
}

export default LoadingView
