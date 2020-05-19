const reducer = (state, action) => {
    switch (action.type){
        case 'SET_COMPARISON':
            return { 
            ...state, 
            comparisonData: action.payload };

        case 'SET_POINTS':
            return {
            ...state,
            answersPoints: [...state.answersPoints, action.payload]  
            }

        case 'SET_USER_RESPONSE':
            return {
                ...state,
                answersPointsArray: action.payload
            }
        default: 
            return state
    }
}
 
export default reducer;