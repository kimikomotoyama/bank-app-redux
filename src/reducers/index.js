export const processBankRequest = (state, action) => {
  switch (action.type) {
    case "WITHDRAW":
      console.log(state.totalAmount - action.payload.amount);
      return {
        ...state,
        totalAmount: state.totalAmount - action.payload.amount
      }
    default:
      return state;
  }
}