import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, setCart, setWishList } from './redux/productReducer';
import { useNavigate } from "react-router-dom";
import './css/pages.css'
import RsImg from './assets/rupee.png';
import CartImg from './assets/shopping-cart.png'
import Wishlist from './assets/like.png';
import Logout from './assets/logout.png';
function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetchState = useSelector((state) => state)
    // console.log(fetchState.ProdArr);


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


    const NoOfProInCart = fetchState.CartArr;
    const CartArrLen = NoOfProInCart.length
    // alert(CartArrLen)

    const NoOfProInWishlist = fetchState.WishListArr;
    const WishlistArrLen = NoOfProInWishlist.length
    // alert(WishlistArrLen)


    const handleAddToCart = () => {
        navigate("/AddToCart")
    }

    const handleAddToWishlist = () => {
        navigate("/Wishlist")
    }


    const ProductDesc = (Product) => {
        console.log('MyProd', Product)
        window.localStorage.setItem("ProdDesc", JSON.stringify(Product))
        navigate("/ProductDesc")
    }

    useEffect(() => {
        window.localStorage.setItem("ProdDesc", JSON.stringify({}))
    })

    const handleLogout = () => {
        window.localStorage.clear()
        navigate("/")
    }


    return (
        <>
            <div className="AddToCartDiv">
                <span className="pageHeader">
                    Dashboard
                </span>
                <div className="AddToCartImgParent">
                    <div style={{ marginRight: '20px', cursor: 'pointer' }} onClick={handleAddToWishlist}>
                        <img src={Wishlist} style={{ width: '43px' }} />
                        <span className="notify-badgeWishlist">{WishlistArrLen}</span>
                    </div>
                    <div onClick={handleAddToCart} style={{ cursor: 'pointer', marginRight: '20px' }}>
                        <img src={CartImg} style={{ width: '43px' }} />
                        <span className="notify-badgeCart">{CartArrLen}</span>
                    </div>
                    <div
                        onClick={handleLogout}>
                        <img src={Logout} style={{ width: '43px', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
            <div>
                {fetchState.ProdArr.map((product, i) => {
                    return (
                        <div key={i} className="ProdCard">
                            <div
                                onClick={() => {
                                    ProductDesc(product)
                                }}>
                                <div className="ProImageDiv">
                                    <img src={product.url} />
                                </div>
                                <span className="ProdTitle">
                                    {product.title}
                                </span>
                                <p className="ProdDesc">
                                    {product.desc}
                                </p>
                                <p className="ProdOriginalPriceDiv">
                                    <img src={RsImg} className="OriginalRsImage" />
                                    <span className="ProdOriginalPrice">
                                        {product.original_Price}
                                    </span>
                                </p>
                                <div style={{ clear: 'both', padding: '0px 5%' }}>
                                    <img src={RsImg} className="RsImage" />
                                    <span className="ProdDelText">
                                        {product.del_Text}
                                    </span>
                                    <span className="ProdOffPrice">
                                        {product.off_price}
                                    </span>
                                </div>
                                <p>
                                    <span className="GetIt">
                                        Get it by
                                    </span>
                                    <span className="GetItBy">
                                        {product.getIt}
                                    </span>
                                </p>
                            </div>

                            <div className="AddToCartProd">
                                <span className="AddToCartProdText"
                                    onClick={() => {
                                        AddTOCart(product)
                                    }}>
                                    Add To Cart
                                </span>
                            </div>
                            <div className="AddToWishlistProd">
                                <span className="AddToWishlistProdText"
                                    onClick={() => {
                                        AddTOWishlist(product)
                                    }}>
                                    Add to Wishlist
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>

    );
}

export default Dashboard;