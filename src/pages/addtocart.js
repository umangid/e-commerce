import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/pages.css";
import RsImg from "./assets/rupee.png";
function AddToCart() {
  const { CartArr } = useSelector((state) => state);
  // console.log(CartArr);

  return (
    <>
      <div>
        <span className="pageHeader">Cart</span>
      </div>
      <div>
        {CartArr.length > 0 ? (
          CartArr.map((prodList, i) => {
            return (
              <div key={i} className="ProdCard">
                <div className="ProImageDiv">
                  <img src={prodList.url} style={{ width: "70%" }} />
                </div>
                <span className="ProdTitle">{prodList.title}</span>
                <p className="ProdDesc">{prodList.desc}</p>
                <p className="ProdOriginalPriceDiv">
                  <img src={RsImg} className="OriginalRsImage" />
                  <span className="ProdOriginalPrice">
                    {prodList.original_Price}
                  </span>
                </p>
                <div style={{ clear: "both", padding: "0px 5%" }}>
                  <img src={RsImg} className="RsImage" />
                  <span className="ProdDelText">{prodList.del_Text}</span>
                  <span className="ProdOffPrice">{prodList.off_price}</span>
                </div>
                <p>
                  <span className="GetIt">Get it by</span>
                  <span className="GetItBy">{prodList.getIt}</span>
                </p>
              </div>
            );
          })
        ) : (
          <div className="noDataFound">
            <span>Your cart is empty</span>
          </div>
        )}
      </div>
    </>
  );
}

export default AddToCart;
