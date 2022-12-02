import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/pages.css";
import RsImg from "./assets/rupee.png";
import { setCart, setWishList } from "./redux/productReducer";
import { useParams } from "react-router-dom";

function ProductDesc() {
  let params = useParams();

  const dispatch = useDispatch();
  const fetchState = useSelector((state) => state);
  const [Product, setProduct] = useState(
    fetchState.ProdArr.filter((item) => item.id.toString() === params.id)
  );

  const AddTOCart = (NewArr) => {
    const MyVar = fetchState.ProdArr.filter((item) => item.id === params.id);
    const MyArr = [...MyVar, NewArr];
    dispatch(setCart(MyArr));
    // console.log('............................Add to Cart', MyArr)
    alert(`${NewArr.title} added to cart`);
    // navigate("/AddToCart")
  };

  const AddTOWishlist = (NewArr) => {
    const MyVar = fetchState.ProdArr.filter((item) => item.id === params.id);

    const MyArr = [...MyVar, NewArr];
    dispatch(setWishList(MyArr));
    // console.log('............................Add to Wishlist', MyArr)
    alert(`${NewArr.title} added to Wishlist`);
    // navigate("/Wishlist")
  };

  return (
    <>
      <div>
        <span className="pageHeader">Product Description</span>
      </div>

      <div>
        {Product.map((item) => (
          <div className="ProdCard" key={item.id}>
            <div className="ProImageDiv">
              <img src={item.url} style={{ width: "70%" }} />
            </div>
            <span className="ProdTitle">{item.title}</span>
            <p className="ProdDesc">{item.desc}</p>
            <p className="ProdOriginalPriceDiv">
              <img src={RsImg} className="OriginalRsImage" />
              <span className="ProdOriginalPrice">
                {Product.original_Price}
              </span>
            </p>
            <div style={{ clear: "both", padding: "0px 5%" }}>
              <img src={RsImg} className="RsImage" />
              <span className="ProdDelText">{item.del_Text}</span>
              <span className="ProdOffPrice">{item.off_price}</span>
            </div>
            <p>
              <span className="GetIt">Get it by</span>
              <span className="GetItBy">{item.getIt}</span>
            </p>
            <div className="AddToCartProd">
              <span
                className="AddToCartProdText"
                onClick={() => {
                  AddTOCart(item);
                }}
              >
                Add To Cart
              </span>
            </div>
            <div className="AddToWishlistProd">
              <span
                className="AddToWishlistProdText"
                onClick={() => {
                  AddTOWishlist(item);
                }}
              >
                Add to Wishlist
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductDesc;
