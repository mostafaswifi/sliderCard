

let flagSatate = false

const flageReducer = (state = flagSatate, action) => {
  switch (action.type) {
    case 'FLAGE':
        return !state
  
      
    default:
      return state;
  }
};

export default flageReducer;
