import { formValues, wholesalerResponse } from "../../../services/wholesalers";
import { stateAsync } from "../../../types";


export interface options extends formValues{
    isSortLocal: boolean;
}

export interface paginate {
    isNextFinal: boolean;
    isPreviousInitial: boolean;
    total?: number;
    totalPage: number;
}

export interface wholesalersState {
    wholesalers: wholesalerResponse[];
    status: stateAsync;
    options: options;
    paginate: paginate
}


export const initialState: wholesalersState = {
    wholesalers: [],
    status: 'idle',
    options: {itemPerPage: 3, sortBy: 'name', isSortLocal: false, page: 0},
    paginate: {isPreviousInitial: false, isNextFinal: false, totalPage: 1}
}