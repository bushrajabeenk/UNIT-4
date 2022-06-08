import { DEC_COUNTER, INC_COUNTER } from "./counter.types";

export const counterInc = () => ({ type: INC_COUNTER, payload: 2 });
export const counterDec = () => ({ type: DEC_COUNTER, payload: 5 });
