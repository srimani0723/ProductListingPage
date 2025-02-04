import React from 'react'
import Cookies from "js-cookie";
import { useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Heading, Image, ImageDiv, Input, InputDiv, Label, MainDiv, Para } from './styledcomponent'
import LoginSlice from '../../ReduxComponent/LoginSlice';

const Login = () => {
    const navigate = useNavigate();

    const jwtToken = Cookies.get('jwt_token');
    if (jwtToken !== undefined) {
        return <Navigate to='/' />
    }

    const { showpassword, errorMsg, username, password, submitError } = useSelector((store) => { return store.LoginState })

    const dispatch = useDispatch();
    const action = LoginSlice.actions;

    const onSuccessSubmit = (jwtToken) => {
        dispatch(action.setErrorMsg(''))
        Cookies.set('jwt_token', jwtToken, { expires: 30 })
        navigate('/')
    }

    const onFailureSubmit = (errormsg) => {
        dispatch(action.setErrorMsg(errormsg));
    }

    const onSubmitBtn = async (e) => {
        e.preventDefault();
        const url = 'https://apis.ccbp.in/login'
        const userdeatils = { username, password };
        const options = {
            method: 'POST',
            body: JSON.stringify(userdeatils),
        }
        const res = await fetch(url, options)
        const data = await res.json()

        if (res.ok) {
            dispatch(action.setErrorMsg(''))
            onSuccessSubmit(data.jwt_token)

        } else {
            dispatch(action.setErrorMsg(data.error_msg))
        }

    }

    const getUsernameInput = (e) => {
        dispatch(action.getUsername(e.target.value))
    }
    const getPasswordInput = (e) => {
        dispatch(action.getPassword(e.target.value))
    }
    const toggleShowPassword = () => {
        dispatch(action.showPassword())
    }

    return (
        <MainDiv>
            <ImageDiv>
                <Image
                    src="https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431747.jpg?t=st=1736575330~exp=1736578930~hmac=d3650439175d54235e26896aa5d52e35213e3be1d804e6c250246dc2d7bd786b&w=740"
                    alt="shoppping" />
            </ImageDiv>
            <Form onSubmit={onSubmitBtn}>
                <Heading>Product Listing Store</Heading>
                <InputDiv>
                    <Label htmlFor="username" >Username</Label>
                    <Input onChange={getUsernameInput} type="text" id="username" placeholder="username" />
                </InputDiv>
                <InputDiv>
                    <Label htmlFor="password" >Password</Label>
                    <Input onChange={getPasswordInput} type={showpassword ? "text" : 'password'} id="password" placeholder="Password" />
                </InputDiv>
                <InputDiv flex={'row'} align={'center'}>
                    <Input height={'15px'} width={'15px'} type="checkbox" id="checkbox" onChange={toggleShowPassword} />
                    <Label htmlFor="checkbox" >ShowPassword</Label>
                </InputDiv>
                <Button type="submit" onClick={onSubmitBtn}>Login</Button>
                {errorMsg !== "" ? (<Para>{errorMsg}</Para>) : null}
            </Form>
        </MainDiv>
    )
}

export default Login