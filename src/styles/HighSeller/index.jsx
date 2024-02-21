import styled from "styled-components";


export const HighSellerContainer = styled.div`
    width: 100%;
    padding: 70px 20px 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HighSellerWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const HighSellerHeading = styled.h2`
    font-size: 25px;
    font-weight: 600;
    
`


export const HighSellerProductsWrap = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 16px;

    @media (max-width: 750px)
    {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 600px)
    {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 430px)
    {
        grid-template-columns: 1fr;
    }
`

export const HighSellerProductsCard = styled.div`
    width: 100%;
    max-width: 400px;
    border: 2px solid rgb(203,203,203);
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    transition: all .5s;

    &:hover{
        border: 2px solid black;
    }
`

export const ProductsImgWrap = styled.div`
    
`

export const ProductsImg = styled.img`
    width: 100%;
`   

export const ProductNameWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`

export const ProductsName = styled.h3`
    font-size: 18px;
    font-weight: 400;
    
`

export const ProductsPrice = styled.h2`
    font-weight: 600;
`