const reducerApp = (state, action) => {
  switch (action.type) {
    case 'SET_COMPARISON':
      return {
        ...state,
        comparisonData: action.payload,
        comparisonName: action.name,
      };

    case 'SET_POINTS':
      return {
        ...state,
        answersPoints: [...state.answersPoints, action.payload],
      };

    case 'SET_USER_RESPONSE':
      return {
        ...state,
        answersPointsArray: action.payload,
      };
    default:
      return state;
  }
};

export default reducerApp;
