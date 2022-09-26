const inSatae = {
  sliderValue: 50,
  previewNum: 2500,
  cost: 250,
};

const sliderReducer = (state = inSatae, action) => {
  switch (action.type) {
    case "SLIDER_CHANGE_MONTH":
      return {
        ...state,
        sliderValue: action.payload,
        previewNum: action.payload * 10,
        cost: action.payload * 10,
      };

    case "SLIDER_CHANGE_YEAR":
      return {
        ...state,
        sliderValue: action.payload,
        previewNum: action.payload * 100,
        cost: action.payload * 75,
      };

    default:
      return state;
  }
};

export default sliderReducer;
