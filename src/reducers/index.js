const reducer = (state, action) => {
    switch (action.type){
        case 'SET_COMPARISON':
            return { 
            ...state, 
            comparisonData: action.payload };

        default: 
            return state
    }
}
 
export default reducer;