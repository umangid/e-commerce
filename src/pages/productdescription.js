import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './css/pages.css'
import RsImg from './assets/rupee.png';
import { fetchProduct, setCart, setWishList } from './redux/productReducer';

function ProductDesc() {
    const [Product, setProduct] = useState(JSON.parse(localStorage.getItem("ProdDesc")));
    const dispatch = useDispatch();
    const fetchState = useSelector((state) => state)

    const AddTOCart = (NewArr) => {
        const MyVar = fetchState.CartArr
        const MyArr = [...MyVar, NewArr];
        dispatch(setCart(MyArr));
        // console.log('............................Add to Cart', MyArr)
        alert(`${NewArr.title} added to cart`)
        // navigate("/AddToCart")
    }

    const AddTOWishlist = (NewArr) => {
        const MyVar = fetchState.WishListArr
        const MyArr = [...MyVar, NewArr];
        dispatch(setWishList(MyArr));
        // console.log('............................Add to Wishlist', MyArr)
        alert(`${NewArr.title} added to Wishlist`)
        // navigate("/Wishlist")
    }


    return (
        <>
            <div>
                <span className="pageHeader">
                    Product Description
                </span>
            </div>
            <div>
                <div className="ProdCard">
                    <div className="ProImageDiv">
                        <img src={Product.url} />
                    </div>
                    <span className="ProdTitle">
                        {Product.title}
                    </span>
                    <p className="ProdDesc">
                        {Product.desc}
                    </p>
                    <p className="ProdOriginalPriceDiv">
                        <img src={RsImg} className="OriginalRsImage" />
                        <span className="ProdOriginalPrice">
                            {Product.original_Price}
                        </span>
                    </p>
                    <div style={{ clear: 'both', padding: '0px 5%' }}>
                        <img src={RsImg} className="RsImage" />
                        <span className="ProdDelText">
                            {Product.del_Text}
                        </span>
                        <span className="ProdOffPrice">
                            {Product.off_price}
                        </span>
                    </div>
                    <p>
                        <span className="GetIt">
                            Get it by
                        </span>
                        <span className="GetItBy">
                            {Product.getIt}
                        </span>
                    </p>
                    <div className="AddToCartProd">
                        <span className="AddToCartProdText"
                            onClick={() => {
                                AddTOCart(Product)
                            }}>
                            Add To Cart
                        </span>
                    </div>
                    <div className="AddToWishlistProd">
                        <span className="AddToWishlistProdText"
                            onClick={() => {
                                AddTOWishlist(Product)
                            }}>
                            Add to Wishlist
                        </span>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ProductDesc;