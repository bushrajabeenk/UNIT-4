import { DEC_COUNT, INC_COUNT } from "./actions.types";

export const add = () => {
  return {
    type: INC_COUNT,
    payload: 2,
  };
};

export const subtract = () => {
  return {
    type: DEC_COUNT,
    payload: 5,
  };
};
