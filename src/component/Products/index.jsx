import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FetchData } from '../../ReduxComponent/FetchMiddleware/FetchData';
import ProductCard from '../ProductCard';
import FailureView from '../FailureView';
import EmptyView from "../EmptyView";

import { ProductsPage, PageBtn, PageCount, PageDiv, ProductsDiv, ProductsSection, UList } from './styledcomponent';
import LoadingView from '../LoadingView';
import ProductsSlice from '../../ReduxComponent/ProductsSlice';
import HeaderSlice from '../../ReduxComponent/HeaderSlice';

const apiStatusConstraints = {
    initial: "INITIAL",
    success: "SUCCESS",
    failure: "FAILURE",
    inProgress: "IN_PROGRESS",
};

function Products() {
    // const { sideBar } = useSelector(store => store.HeaderState)
    // console.log(sideBar)
    const { filteredList, apiStatus, pageNumber } = useSelector(store => { return store.productsState })
    const { sideBar } = useSelector(store => { return HeaderSlice })
    const dispatch = useDispatch()
    const action = ProductsSlice.actions

    useEffect(() => {
        // const cachedProducts = localStorage.getItem('productsList');

        // if (!cachedProducts) {
        //     dispatch(FetchData);
        // }
        dispatch(FetchData);

    }, [dispatch])

    const onClickPageIncrement = () => {
        dispatch(action.pageIncrement())
    }

    const onClickPageDecrement = () => {
        dispatch(action.pageDecrement())
    }

    const successView = () => {
        const pageSize = 8;
        const start = (pageNumber - 1) * pageSize
        const end = start + pageSize

        const TotalPages = Math.ceil(filteredList.length / pageSize)

        const paginatedList = filteredList.slice(start, end)

        const shouldShowProductsList = paginatedList.length > 0;

        return shouldShowProductsList ? (
            <ProductsPage>
                <UList>
                    {paginatedList.map(each => (<ProductCard key={each.id} item={each} />))}
                </UList>

                <PageDiv>
                    <PageBtn onClick={onClickPageDecrement} disabled={pageNumber === 1 ? true : false}>
                        <FaArrowLeft className="text-blue-400" />
                    </PageBtn>
                    <PageCount>{pageNumber}</PageCount>
                    <PageBtn onClick={onClickPageIncrement} disabled={pageNumber === TotalPages ? true : false}>
                        <FaArrowRight className="text-blue-400" />
                    </PageBtn>
                </PageDiv>
            </ProductsPage>
        ) : (<EmptyView />)
    }

    const renderAllProducts = () => {
        switch (apiStatus) {
            case apiStatusConstraints.success:
                return successView()
            case apiStatusConstraints.inProgress:
                return <LoadingView />
            case apiStatusConstraints.failure:
                return <FailureView />
            default:
                return null
        }
    }

    return (
        <ProductsSection >
            <ProductsDiv >
                {renderAllProducts()}
            </ProductsDiv>
        </ProductsSection>
    )
}

export default Products