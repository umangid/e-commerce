import { createReducer, createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
     ProdArr :[{
        "id": 3,
        "title": "Roadster",
        "desc": "Under 799",
        "del_Text": '3,795',
        "original_Text": '789',
        "off_price": 'Rs.3036 OFF',
        "Best": 'NEW SEASON',
        'Qty': 0,
        'url': require('../assets/149680-4036957282.jpeg')
    }, {
        "id": 4,
        "title": "H&M",
        "desc": "Men Solid Canvas Espadrilles",
        "del_Text": '1,299',
        "original_Price": '909',
        "off_price": '30% OFF',
        "Best": 'BESTSELLER',
        'Qty': 0,
        'url': require('../assets/th-1141034874.jpeg')
    }, {
        "id": 5,
        "title": "Mast & Haubour",
        "desc": "Men Striped Sneakers",
        "del_Text": '2,699',
        "original_Price": '999',
        "off_price": 'Rs.1700 OFF',
        "Best": 'BESTSELLER',
        'Qty': 0,
        'url': require('../assets/th-2150170442.jpeg')
    }, {
        "id": 6,
        "title": "Roadster",
        "desc": "Men Textured Sneakers",
        "del_Text": '4,495',
        "original_Price": '796',
        "off_price": 'Rs.3731 OFF',
        "Best": 'BESTSELLER',
        'Qty': 0,
        'url': require('../assets/th-1849034584.jpeg')
    }]
}



const productReducer = createSlice({
    name: 'Prod',
    initialState,
    reducers: {
        
        fetchProduct(state, action) {
            state.ProdArr = action.payload
        }
    }

})

export const { fetchProduct } = productReducer.actions
export default productReducer.reducer;