import { createReducer, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    CartArr: [],
    WishListArr: [],
    ProdArr: [{
        "id": 3,
        "title": "VivoBook",
        "desc": "ASUS VivoBook 14 (2021) Ryzen 5 Quad Core 3500U ",
        "del_Text": '3,795',
        "original_Price": '789',
        "off_price": 'Rs.3036 OFF',
        "Best": 'NEW SEASON',
        'Qty': 0,
        'url': require('../assets/lenovo-na-laptop-original-imafuzt8r5jqppfn.webp'),
        'getIt': "Saturday, September 22"
    }, {
        "id": 4,
        "title": "Inspiron",
        "desc": "ASUS VivoBook 14 (2021) Ryzen 5 Quad Core 3500U ",
        "del_Text": '1,299',
        "original_Price": '909',
        "off_price": '30% OFF',
        "Best": 'BESTSELLER',
        'Qty': 0,
        'url': require('../assets/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.webp'),
        'getIt': "Tuesday, September 10"
    }, {
        "id": 5,
        "title": "Lenovo",
        "desc": "ASUS VivoBook 14 (2021) Ryzen 5 Quad Core 3500U ",
        "del_Text": '2,699',
        "original_Price": '999',
        "off_price": 'Rs.1700 OFF',
        "Best": 'BESTSELLER',
        'Qty': 0,
        'url': require('../assets/na-gaming-laptop-acer-original-imagyhwfgwhkf3vv.webp'),
        'getIt': "Monday, September 15"
    }, {
        "id": 6,
        "title": "Macbook",
        "desc": "ASUS VivoBook 14 (2021) Ryzen 5 Quad Core 3500U ",
        "del_Text": '4,495',
        "original_Price": '796',
        "off_price": 'Rs.3731 OFF',
        "Best": 'BESTSELLER',
        'Qty': 0,
        'url': require('../assets/na-thin-and-light-laptop-lenovo-original-imag5jy6fsm2yx4q.webp'),
        'getIt': "Wednesday, August 02"
    }]
}



const productReducer = createSlice({
    name: 'Prod',
    initialState,
    reducers: {
        fetchProduct(state, action) {
            state.ProdArr = action.payload
        },
        setCart(state, action) {
            state.CartArr = action.payload
        },
        setWishList(state, action) {
            state.WishListArr = action.payload
        },

    }

})

export const { fetchProduct, setCart, setWishList } = productReducer.actions
export default productReducer.reducer;