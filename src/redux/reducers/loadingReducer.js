export const LoadingReducer = (
  prevState = {
    isLoading: false,
  },
  action
) => {
  let { type, payLoad } = action;
  console.log(action.payLoad,'payload')
  switch (type) {
    case "change_loading": {
      let newState = { ...prevState };
      newState.isLoading = payLoad;
      return newState;
  }
}
  return prevState;
};