
import { EXAMPLE_ACTION } from '../actions/exampleActions';

const initialState = {
  
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return {
        ...state,
        
      };
    default:
      return state;
  }
};

export default exampleReducer;
