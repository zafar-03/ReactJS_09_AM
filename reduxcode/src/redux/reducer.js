const intialValue = {
    count: 100
};


const reducer = (state = intialValue, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state, count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state, count: state.count - 1
            }
        case "RESET":
            return {
                count: intialValue.count
            }
        default:
            return { ...state };
    }
}

export default reducer;