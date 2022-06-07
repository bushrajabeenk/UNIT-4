export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "add": {
      state.count++;
      return { ...state };
    }
    case "subtract": {
      state.count--;
      return { ...state };
    }

    default: {
      return state;
    }
  }
};
