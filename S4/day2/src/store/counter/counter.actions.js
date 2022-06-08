import { DEC_COUNTER, INC_COUNTER } from "./counter.types";

export const counterInc = () => ({ type: INC_COUNTER });
export const counterDec = () => ({ type: DEC_COUNTER });
