import { INCREMENT, DECREASE, ACCOUNT_ID } from "./actionTypes";

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decreaseAction() {
  return{
    type: DECREASE,
  };
}


export function updateAccountID() {
  return{
    type: ACCOUNT_ID,
  };
}