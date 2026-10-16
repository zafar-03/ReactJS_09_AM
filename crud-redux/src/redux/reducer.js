const intialData = {
    products: [
        {
            "id": 1,
            "name": "Laptop",
            "category": "Electronics",
            "price": 55000,
            "brand": "Dell"
        },
        {
            "id": 2,
            "name": "Smartphone",
            "category": "Electronics",
            "price": 25000,
            "brand": "Samsung"
        },
        {
            "id": 3,
            "name": "Headphones",
            "category": "Accessories",
            "price": 3500,
            "brand": "Sony"
        },
        {
            "id": 4,
            "name": "Smart Watch",
            "category": "Wearables",
            "price": 4500,
            "brand": "Noise"
        },
        {
            "id": 5,
            "name": "Bluetooth Speaker",
            "category": "Accessories",
            "price": 2800,
            "brand": "JBL"
        }
    ]
};

const reducer = (state = intialData, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,products : [...state.products,action.payload]
            }
        case "EDIT_PRODUCT":
            return {
                ...state, products : state.products.map((element,index)=>{
                    return ( (element.id == action.payload.id) ? action.payload : element )
                })
            }
            
        case "DELETE_PRODUCT":
            return {
                ...state, products : state.products.filter((element,index)=>{
                    return element.id != action.payload
                })
            }
        default:
            return {...state}
    }
}

export default reducer;