import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from 'react-redux'
import { ProfileButton, HomeLink, NavLink, NavDiv, Button, Nav, IconDiv, Para, LogoutButton, NavOptionsDiv, BagDiv, BagCount, ProfileDiv, ProfileDivSm } from './styledcomponent'
import { Logo, BarsIcon, LogoTxt, SearchIcon, ProfileIcon, BagIcon, ArrowIcon, HeartIcon } from "../../assets/assets";
import HeaderSlice from '../../ReduxComponent/HeaderSlice';

const Options = [
    { name: 'Shop', id: 'SHOP', path: '/shop' },
    { name: 'Skills', id: 'SKILLS', path: '/skills' },
    { name: 'Stories', id: 'STORIES', path: '/stories' },
    { name: 'About', id: 'ABOUT', path: '/about' },
    { name: 'Contact Us', id: 'CONTACT_US', path: '/contact-us' },
];

function Header() {
    const { displayOptions, activeOption, logoutBtn } = useSelector((store) => { return store.HeaderState })
    const { cartQuantity } = useSelector(store => store.CartState)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const action = HeaderSlice.actions;

    const toggleBarOptions = () => {
        dispatch(action.toggleBar())
    }

    const toggleLogoutBtn = () => {
        dispatch(action.toggleLogoutBtn())
    }

    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/login')
    }

    const onClickCart = () => {
        navigate('/cart')
    }

    const onClickWhislist = () => {
        navigate('/wishlist')
    }

    // if (location.pathname === '/') {
    //     dispatch(action.setActiveOption('HOME'))
    // } else if (location.pathname === '/cart') {

    // } else if (location.pathname === '/wishlist') {

    // } else {
    //     const getActivePathOptionObj = Options.filter(each => each.path === location.pathname)
    //     if (activeOption !== getActivePathOptionObj[0].id) {
    //         dispatch(action.setActiveOption(getActivePathOptionObj[0].id))
    //     }
    // }

    const setActiveOption = (active) => {
        dispatch(action.setActiveOption(active))
    }

    return (
        <Nav>
            <NavDiv>
                <IconDiv $w="calc(100%/3)">
                    <Button onClick={toggleBarOptions} $db='none'>
                        <BarsIcon></BarsIcon>
                    </Button>
                    <HomeLink to={'/'} >
                        <Button $mr="0rem">
                            <Logo></Logo>
                        </Button>
                    </HomeLink>
                </IconDiv>

                <IconDiv $w="calc(100%/3)" $justify="center">
                    <Button $mr='0rem' $w="5rem" $sw="4rem">
                        <LogoTxt></LogoTxt>
                    </Button>
                </IconDiv>

                <IconDiv $justify="flex-end" $w="calc(100%/3)">
                    <Button>
                        <SearchIcon></SearchIcon>
                    </Button>

                    <Button onClick={onClickWhislist}>
                        <HeartIcon fill={'white'}></HeartIcon>
                    </Button>

                    <BagDiv>
                        <Button onClick={onClickCart}>
                            <BagIcon></BagIcon>
                        </Button>
                        {cartQuantity > 0 ? <BagCount>{cartQuantity}</BagCount> : null}
                    </BagDiv>

                    <ProfileDiv $d={'none'}>
                        <Button onClick={toggleLogoutBtn}>
                            <ProfileIcon></ProfileIcon>
                        </Button>
                        {logoutBtn && <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>}
                    </ProfileDiv>
                </IconDiv>
            </NavDiv >

            <NavOptionsDiv $sd={displayOptions ? '' : 'none'} >
                {
                    Options.map(each => {

                        const setActivePage = () => {
                            setActiveOption(each.id)
                        }

                        const activeBg = activeOption === each.id ? '#e7f5fd' : ''

                        return (<NavLink
                            $bg={activeBg}
                            onClick={setActivePage}
                            key={each.id}
                            to='/shop'
                        >
                            <Para>{each.name}</Para>
                        </NavLink>)
                    }
                    )
                }

                <ProfileDivSm $d={'none'}>
                    <ProfileButton onClick={toggleLogoutBtn}>
                        Profile
                    </ProfileButton>
                    {logoutBtn && <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>}
                </ProfileDivSm>
            </NavOptionsDiv>
        </Nav >
    )
}

export default Header
