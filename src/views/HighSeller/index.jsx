import React from 'react'
import {ProductsName, HighSellerContainer, HighSellerHeading, HighSellerProductsCard, HighSellerProductsWrap, HighSellerWrap, ProductNameWrap, ProductsImg, ProductsImgWrap, ProductsPrice } from '../../styles/HighSeller'
import Data from '../../utils/AllData'

const HighSeller = () => {
  return (
    <HighSellerContainer>
        <HighSellerWrap>
            <HighSellerHeading>Products we are proud of</HighSellerHeading>
            <HighSellerProductsWrap>
                {Data.slice(0,8).map((product) => (
                <HighSellerProductsCard key = {product.id}>
                    <ProductsImgWrap>
                        <ProductsImg src = {product.img} />
                    </ProductsImgWrap>
                    <ProductNameWrap>
                        <ProductsName>{product.description}</ProductsName>
                        <ProductsPrice>{product.price + "$"}</ProductsPrice>
                    </ProductNameWrap>
                </HighSellerProductsCard>
                ))}
            </HighSellerProductsWrap>
        </HighSellerWrap>
    </HighSellerContainer>
  )
}

export default HighSeller